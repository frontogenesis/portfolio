import { useState, useEffect} from 'react'

export default function useFetch(url) {
    const [ loading, setIsLoading ] = useState(false)
    const [ results, setResults ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setResults(data)
                setIsLoading(false)
            }
            catch(error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { loading, results, error }
}