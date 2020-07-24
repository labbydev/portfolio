import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Degrees = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Education"}}}) {
          edges {
            node {
              frontmatter {
                type
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
      <div className={`mt-4`}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={`mb-6`}>
              <h3 className={`text-2xl uppercase font-thin tracking-tight`}>{node.frontmatter.university}</h3>
              <p className={`text-navy text-sm`}>{node.frontmatter.location}</p>
                <h3 className={`text-lg text-pink font-semibold`}>{node.frontmatter.degree}</h3>
                <p className={`text-navy text-sm`}>{ node.frontmatter.date }</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Degrees