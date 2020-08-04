import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MapPin } from "react-feather"

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
                                end(formatString: "MMMM YYYY")
                                start(formatString: "MMMM YYYY")
                                title
                            }
                        }
                    }
                }
            }
        }
    `
  )

  function Location(props) {
    if (props.location !== null) {
      return (
        <small className={`text-gray-500`}>
          <MapPin
            className={`inline-block h-5 -mt-1`}
            strokeWidth={1}
          />
          { props.location }
        </small>
      )
    } else return null
  }

  return (
    <div className={`pb-12`}>
      <h2>Jobs</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={`mb-8`}>
              <h3>{node.frontmatter.company}</h3>
              <Location
                location={node.frontmatter.location}
              />
              {node.frontmatter.roles.map(key =>
                <div>
                  <h4>{key.title}</h4>
                  <small className={`text-gray-500`}>{ key.end ? key.start + ` - ` + key.end : key.start  }</small>
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