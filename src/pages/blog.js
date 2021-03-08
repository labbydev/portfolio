import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lede from "../components/lede"
import { graphql, Link } from "gatsby"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div
        className={`py-6 sm:py-10 lg:py-8 xl:py-12`}
      >
        <PageTitle text="Ideas"/>
        <Lede text={`I am still a human in beta. These are the notes on how it's going.`} />
        <div
          className={`content`}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div
                className={`lg:mb-12`}
              >
                <h2><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h2>
                <small className={`text-gray-500`}>{ node.frontmatter.date }</small>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "dddd | MM.DD.YYYY")
            path
          }
        }
      }
    }
  }
`

export default Projects
