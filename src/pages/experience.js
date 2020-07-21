import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jobs from "../components/jobs"

export default function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <div>
        <PageTitle
          text="Experience"
        />
        <p>Here's what I've been doing for awhile.</p>
        <Jobs/>
      </div>
    </Layout>
  )
}
