import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconMenuItem from "../components/menu-item--icon"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { GitHub, Send, Linkedin, Droplet, Codepen } from "react-feather";

export default function About({ data }) {
  return (
    <Layout>
        <SEO title="About" />
        <PageTitle
          text={`About ` + data.site.siteMetadata.title}
        />
        <div class="content">
        <h2>The Basics</h2>
            <p>I've worn a lot of hats throughout my web development career, but my current role is <strong>Senior Developer</strong> at <Link to={`https://www.phase2technology.com/`}>Phase2</Link>.</p>
            <div class="grid grid-cols-2 gap-4">
                <p><strong>Pronouns:</strong> She/Her</p>
                <p><strong>Location:</strong> Chicago, IL</p>
            </div>
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
        <h2>How it started</h2>
        <p>I have always been an avid reader with a fascination for asking the right questions. These joint passions took me to pursue a degree in Journalism from <a href="https://ohio.edu">Ohio University</a>.</p>
        <p>It was during my time at OU that I found my first tribe (my <a href="https://www.deltazeta.org/">Delta Zeta</a> sisters) and was first introduced to the wide world of web development. The first time I found flow in the visual storytelling of writing code to move around pixels was the peak of serendipity. I came out of that knowing that while, I no longer craved being a journalist, I had found a new way to tell stories that was true and beautiful for me.</p>
        <h2>How it's going</h2>
        <p>Since then, I've worked on some really interesting <Link to="/projects">projects</Link> and I've had the blessing to work on a number of amazing teams. I still see my job as one of telling stories, they just look a little different than I had expected in my youth.</p>
        <p>I'm definitely still a human in beta. If you're interested in learning more about the ways I'm still learning and growing, go check out my <Link to="/blog">blog</Link>. A good place to start getting to know me more is by finding out what it's like <Link to={`/blog/working-with-me/`}>working with me</Link>.</p>
        <h2>Outside of Work</h2>
        <p>I value authenticity and integrity. I live my life as the same whole person. So, the things I do outside of work often balance and enlighten the work I do during the day.</p>
        <p>When I'm not working, I am always <Link to="https://www.goodreads.com/user/show/84551195-lauren-burroughs">reading something</Link>. I am an active member on the Executive Board of the <Link to="https://www.facebook.com/DZChicagoAlumnae/">Delta Zeta Chicago Alumnae Chapter</Link>. Often, I am fostering and training dogs for <Link to="https://www.onetail.org/">One Tail at a Time</Link>. I am a struggling <Link to="https://www.strava.com/athletes/49372874">runner</Link>. I enjoy cooking, video games, and photography.</p>
        <p>My life would be incomplete without my husband and our dog Hodor.</p>
        <Img
          className={`my-8`}
          fluid={data.file.childImageSharp.fluid}
          alt={`My husband Shane Burroughs holding our dog Hodor. Both are standing on a deck overlooking the Oak Island, NC beach.`}
        />
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
    file: file(relativePath: { eq: "OakIslandVacation-035.jpg" }) {
      childImageSharp {
        fluid(maxHeight:400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
