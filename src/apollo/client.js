import { ApolloClient, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
    uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    fetch
})