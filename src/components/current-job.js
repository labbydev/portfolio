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
                            url
                            location
                            roles {
                                start(difference: "years")
                                title
                            }
                        }
                    }
                }
            }
            file: file(relativePath: { eq: "headshot.png" }) {
              childImageSharp {
                fluid(maxHeight:400) {
                  ...GatsbyImageSharpFluid
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
          className={`hidden md:inline-block rounded-full w-1/3 border-double border-8 border-secondary-darker bg-secondary-darker bg-opacity-50 shadow-lg`}
          fluid={data.file.childImageSharp.fluid}
          alt={`Lauren Burrough's headshot`}
        />
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              {node.frontmatter.roles.map((key, index) => {
                if ((index === 0) && (node.frontmatter.url !== null) ){
                  return (
                    <div>
                      <h3
                        className={`text-white`}
                      >{key.title}</h3>
                      <a
                        className={`block text-secondary-darker`}
                        href={node.frontmatter.url}
                      >{node.frontmatter.company}</a>
                      <small>{(key.start === "1") ? (`a year`) : (key.start + ` years`)}</small>
                    </div>
                  )
                }
              })}
            </div>
          )
        })}
        <div>
          <p><strong>Pronouns:</strong> She/Her</p>
          <p><strong>Location:</strong> Chicago, IL</p>
        </div>
      </div>
      <MoreLink
        to={`/experience/`}
        color={`light`}
      >See my resume</MoreLink>
    </div>
  )
}

export default CurrentJob