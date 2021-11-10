import { useState, useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import fetch from 'isomorphic-fetch'

export default function useApolloRest(uri, path) {
    const [ loading, setIsLoading ] = useState(false)
    const [ results, setResults ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        const restLink = new RestLink({ uri })

        const client = new ApolloClient({
            cache: new InMemoryCache(),
            link: restLink,
            fetch
        })

        const query = gql`
            query {
                location @rest(type: "Location", path: "/${path}") {
                    geoplugin_latitude
                    geoplugin_longitude
                    geoplugin_city
                    geoplugin_regionCode
                }
            }
        `

        async function getUserLocation() {
            try {
                const response = await client.query({ query })
                setResults(response.data)
                setIsLoading(false)
            }
            catch(error) {
                setError(error)
                setIsLoading(false)
            }
        }
        getUserLocation()
    }, [ uri, path ])

    return { loading, results, error }
}