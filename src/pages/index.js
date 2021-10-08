import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import InteractiveMap from "../components/map"
import Layout from "../components/layout"
import Seo from "../components/seo"

import BlogIndex from "../components/blog"

export default function FrontPage({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Weather Programmer" />
      <Bio />
      <div className="front-page-display">
        <BlogIndex />
        <InteractiveMap width='50%' />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
