import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Lede from "../components/lede"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div
        className={`py-6 sm:py-10 lg:py-8 xl:py-12`}
      >
        <PageTitle text="Projects"/>
        <Lede text={`What work have I actually done, though?`} />
        <div
          className={`relative md:grid grid-cols-2 lg:grid-cols-6 gap-2 justify-around items-end`}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div
                className={`lg:col-span-2`}
              >
                <h2> {node.frontmatter.client} </h2>
                <Img
                  className={`block shadow-lg`}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt={node.frontmatter.client + ` website`}
                />
                {node.frontmatter.roles.map(key =>
                  <div>
                    <h3>{key.title}</h3>
                    <small className={`text-gray-500`}>{ key.end ? key.start + ` - ` + key.end : key.start  }</small>
                  </div>
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
                fluid(maxWidth: 600, maxHeight:600, cropFocus: NORTH) {
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
