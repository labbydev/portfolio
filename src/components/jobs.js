import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "Job"}}}, sort: {fields: frontmatter___start, order: DESC}, limit: 3) {
                edges {
                    node {
                        frontmatter {
                            company
                            location
                            roles {
                                end(formatString: "MMM YYYY")
                                start(formatString: "MMM YYYY")
                                title
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
      <h2>Jobs</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              <h3>{node.frontmatter.company}</h3>
              <p>{node.frontmatter.location}</p>
              {node.frontmatter.roles.map(key =>
                <div>
                  <h4>{key.title}</h4>
                  <small>{ key.end ? key.start + ` - ` + key.end : key.start  }</small>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs