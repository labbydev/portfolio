import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jobs from "../components/jobs"
import Degrees from "../components/degrees"
import Conferences from "../components/conferences"

export default function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <div>
        <PageTitle
          text="Experience"
        />
        <p>Lauren has been designing and building websites since 2010, using technologies ranging from React, VueJS, Drupal, WordPress and flat HTML. As a Senior Developer in the Front End Practice she architects accessible SCSS, implements themes and designs JavaScript interactions. She uses her strong communication skills and unflappable nature to consult with clients and propose digital solutions to help them connect with their users in new and impactful ways.</p>
        <Degrees/>
        <Jobs/>
        <Conferences />
      </div>
    </Layout>
  )
}
