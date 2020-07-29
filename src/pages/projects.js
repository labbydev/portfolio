import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Button from "../components/buttons"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <PageTitle
          text="Projects"
        />
        <p>What work have I actually done, though?</p>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                <h3>
                  <Link to={node.frontmatter.path}>{node.frontmatter.client}</Link>
                </h3>
                <p>{node.excerpt}</p>
                {node.frontmatter.roles.map(key =>
                  <div>
                    <h3>{key.title}</h3>
                    <small>{ key.end ? key.start + ` - ` + key.end : key.start  }</small>
                  </div>
                )}
                {node.frontmatter.sites.map(key =>
                  <Button>
                    <Link to={key.link}>{key.title}</Link>
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Project"}}}, sort: {fields: frontmatter___roles___start, order: ASC}) {
      edges {
        node {
          excerpt
          frontmatter {
            client
            path
            image {
              childImageSharp {
                fluid(maxWidth: 315) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            roles {
              end(formatString: "MMM YYYY")
              start(formatString: "MMM YYYY")
              title
            }
            sites {
              link
              title
            }
          }
        }
      }
    }
  }
`

export default Projects
