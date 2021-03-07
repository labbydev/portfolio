import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconMenuItem from "../components/menu-item--icon"
import { graphql, Link } from "gatsby"
import { GitHub, Send, Linkedin, Droplet, Codepen } from "react-feather";

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
        <ul
          aria-label={`Contact Menu`}
          className={`text-center mt-8 mb-8`}
        >
          <IconMenuItem
            to={`mailto:labyrwa@gmail.com`}
            label={`Send Email`}
            bgColor={`secondary`}
          >
            <Send strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://www.linkedin.com/in/labbydev/`}
            label={`See LinkedIn profile`}
            bgColor={`secondary`}
          >
            <Linkedin strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://drupal.org/u/labbydev`}
            label={`See Drupal user profile`}
            bgColor={`secondary`}
          >
            <Droplet strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://github.com/labbydev`}
            label={`See GitHub profile`}
            bgColor={`secondary`}
          >
            <GitHub strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://codepen.io/labbydev`}
            label={`See CodePen profile`}
            bgColor={`secondary`}
          >
            <Codepen strokeWidth={1}/>
          </IconMenuItem>
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