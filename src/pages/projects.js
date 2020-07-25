import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Button from "../components/buttons"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <PageTitle
          text="Projects"
        />
        <p>What work have I actually done, though?</p>
        <div className={`mt-4`}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div className={`mb-6`}>
                <h3 className={`text-2xl uppercase font-thin tracking-tight`}>
                  <Link to={node.frontmatter.path}>{node.frontmatter.client}</Link>
                </h3>
                <p className={`text-navy text-sm`}>{node.excerpt}</p>
                {node.frontmatter.roles.map(key =>
                  <div className={`mb-2`}>
                    <h3 className={`text-lg text-pink font-semibold`}>{key.title}</h3>
                    <p className={`text-navy text-sm`}>{ key.end ? key.start + ` - ` + key.end : key.start  }</p>
                  </div>
                )}
                {node.frontmatter.sites.map(key =>
                  <Button
                    size="sm"
                    buttonColor="dark"
                  >
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
