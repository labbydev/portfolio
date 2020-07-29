import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Degrees = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Education"}}}) {
          edges {
            node {
              frontmatter {
                university
                degree
                date(formatString: "YYYY")
                location
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <h2>Education</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              <h3>{node.frontmatter.university}</h3>
              <p>{node.frontmatter.location}</p>
              <h4>{node.frontmatter.degree}</h4>
              <p>{ node.frontmatter.date }</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Degrees