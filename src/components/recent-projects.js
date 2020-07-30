import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/index"

const RecentProjects = () => {
  const data = useStaticQuery(
    graphql`
      query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "Project"}}}, limit: 3, sort: {fields: frontmatter___roles___start, order: ASC}) {
        edges {
          node {
            excerpt
            frontmatter {
              client
              path
              image {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
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
      <h2>Projects</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              <h3><Link to={node.frontmatter.path}>{node.frontmatter.client}</Link></h3>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
            </div>
          )
        })}
        <Link to={`/projects/`}>See all projects</Link>
      </div>
    </div>
  )
}

export default RecentProjects