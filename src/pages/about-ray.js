import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function About({ data }) {
    const about = data.markdownRemark

    return (
        <Layout title={about.frontmatter.title}>
            <section dangerouslySetInnerHTML={{ __html: about.html }} />       
        </Layout>
    )
}

export const pageQuery = graphql`
    query AboutQuery {
            markdownRemark(id: {eq: "f56014f6-d42a-51a1-8a1d-a37184ec33c6"}) {
                html
                frontmatter {
                    date
                    description
                    title
                }
            }
        }
`