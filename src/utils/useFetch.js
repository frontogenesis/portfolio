import { useState, useEffect} from 'react'

export default function useFetch(url) {
    const [ loading, setIsLoading ] = useState(false)
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setIsLoading(false)
            }
            catch(error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { loading, data, error }
}