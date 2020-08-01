import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RecentProjects = () => {
  const data = useStaticQuery(
    graphql`
      query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "Project"}}}, limit: 4, sort: {fields: frontmatter___roles___start, order: ASC}) {
        edges {
          node {
            excerpt
            frontmatter {
              client
              path
              image {
                childImageSharp {
                  resize(height: 300, width: 300, cropFocus: NORTH) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  )

  return (
    <div>
      <h2>Projects</h2>
      <div
        className={`sm:flex justify-between flex-wrap`}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div
              className={`mx-auto mb-8 shadow-2xl max-w-2xs text-center bg-white sm:inline-block sm:flex-shrink-0`}
            >
              <img
                className={`block`}
                src={node.frontmatter.image.childImageSharp.resize.src}
                alt={node.frontmatter.client + ` website`}
              />
              <Link
                className={`block p-3 shadow-inner`}
                to={node.frontmatter.path}
              >
                <h3>{node.frontmatter.client}</h3>
              </Link>
            </div>
          )
        })}
      </div>
      <Link to={`/projects/`}>See all projects</Link>
    </div>
  )
}

export default RecentProjects