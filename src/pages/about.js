import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <PageTitle
          text={`About ` + data.site.siteMetadata.title}
        />
        <p>Something something something.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`