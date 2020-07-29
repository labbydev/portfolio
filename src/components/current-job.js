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
      <Link to={`/experience/`}>See my resume</Link>
    </div>
  )
}

export default CurrentJob