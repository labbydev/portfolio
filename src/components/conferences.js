import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Conferences = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Conference"}}}) {
          edges {
            node {
              frontmatter {
                title
                conference
                date(formatString: "YYYY")
                location
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <h2>Speaking Engagements</h2>
      <div className={`mt-4`}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={`mb-6`}>
              <h3 className={`text-2xl uppercase font-thin tracking-tight`}>{node.frontmatter.title}</h3>
              <p className={`text-navy text-sm`}>{node.frontmatter.location}</p>
              <h3 className={`text-lg text-pink font-semibold`}>{node.frontmatter.conference}</h3>
              <p className={`text-navy text-sm`}>{ node.frontmatter.date }</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Conferences