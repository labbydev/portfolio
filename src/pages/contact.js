import React from "react"
import { graphql } from "gatsby"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <PageTitle
          text={`Contact ` + data.site.siteMetadata.title}
        />
        <p>Call me. Beep me. Here is how to reach me.</p>
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
