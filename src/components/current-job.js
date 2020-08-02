import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MoreLink from "./more-link"
import Img from "gatsby-image"

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
            file: file(relativePath: { eq: "headshot.png" }) {
              childImageSharp {
                fixed(height:400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }
    `
  )

  return (
    <div
      className={`relative`}
    >
      <h2
        className={`invisible absolute`}
      >Current Job</h2>
      <div
        className={`flex items-center justify-around`}
      >
        <Img
          className={`rounded-full border-double border-8 border-off-white bg-secondary-darker bg-opacity-50`}
          fixed={data.file.childImageSharp.fixed}
          alt={`Lauren Burrough's headshot`}
        />
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
      <MoreLink
        to={`/experience/`}
        color={`light`}
      >See my resume</MoreLink>
    </div>
  )
}

export default CurrentJob