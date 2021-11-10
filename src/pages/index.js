import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import InteractiveMap from "../components/map"
import BlogIndex from "../components/blog"
import WeatherAlerts from "../components/weather-alerts"
import useFetch from "../utils/useFetch"

export default function FrontPage({ data, location }) {
  const { loading, results, error } = useFetch(`https://ssl.geoplugin.net/json.gp?k=${process.env.GATSBY_GEOPLUGIN_KEY}`)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Weather Programmer" />
      <Bio />
      <WeatherAlerts userLocation={results} loading={loading} error={error} />
      <div className="front-page-display">
        <BlogIndex />
        <InteractiveMap userLocation={results} width='50%' />
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
