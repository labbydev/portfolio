import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Hexagon } from "react-feather"

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
            <div
              className={`mb-8`}
            >
              <h3>{node.frontmatter.university}</h3>
              <h4>{node.frontmatter.degree}</h4>
              { node.frontmatter.location } <Hexagon className={`fill-current inline-block h-2 w-4 text-gray-300 -mt-1`} strokeWidth={.5} /> {node.frontmatter.date}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Degrees