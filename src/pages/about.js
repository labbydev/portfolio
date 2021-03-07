import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <PageTitle
          text={`About ` + data.site.siteMetadata.title}
        />
        <h2>The Basics</h2>
        <p>I've worn a lot of hats throughout my web development career, but my current role is <strong>Senior Developer</strong> at <Link to={`https://www.phase2technology.com/`}>Phase2</Link>.</p>
        <p><strong>Pronouns:</strong> She/Her</p>
        <p><strong>Location:</strong> Chicago, IL</p>
        <p><strong>Find me on the internet:</strong></p>
        <ul>
          <li><Link to={`https://www.linkedin.com/in/labbydev/`}>LinkedIn</Link></li>
          <li><Link to={`https://github.com/labbydev?tab=repositories`}>GitHub</Link></li>
          <li><Link to={`https://twitter.com/labbydev`}>Twitter</Link></li>
          <li><Link to={`https://www.drupal.org/u/labbydev`}>Drupal.org</Link></li>
        </ul>
      </div>
      <p>Looking for more details? Read more about what it's like <Link to={`/blog/working-with-me/`}>Working with me</Link>.</p>
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