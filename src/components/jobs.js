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
      <div className={`mt-4`}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={`mb-6`}>
              <h3 className={`text-2xl uppercase font-thin tracking-tight`}>{node.frontmatter.company}</h3>
              <p className={`text-navy text-sm`}>{node.frontmatter.location}</p>
              {node.frontmatter.roles.map(key =>
                <div className={`mb-2`}>
                  <h3 className={`text-lg text-pink font-semibold`}>{key.title}</h3>
                  <p className={`text-navy text-sm`}>{ key.end ? key.start + ` - ` + key.end : key.start  }</p>
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