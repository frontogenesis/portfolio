import React from 'react'
import { ApolloProvider} from '@apollo/client'
import { client } from './client'

export function wrapRootElement({ element }) {
    return (
        <ApolloProvider client={client}>{element}</ApolloProvider>
    )   
}