import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const CurrentJob = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "Job"}}}, limit: 1, sort: {fields: frontmatter___start, order: DESC}) {
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
      <h2>Current Job</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              <h3
                className={`text-gray-100`}
              >{node.frontmatter.company}</h3>
              <p>{node.frontmatter.location}</p>
              {node.frontmatter.roles.map(key =>
                <div>
                  <h3>{key.title}</h3>
                  <p>{ key.end ? key.start + ` - ` + key.end : key.start  }</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <Link to={`/experience/`}>See my resume</Link>
    </div>
  )
}

export default CurrentJob