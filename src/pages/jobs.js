import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export default function Jobs({ data }) {
  return (
    <Layout>
      <SEO title="Employment" />
      <div>
        <PageTitle
          text="Employment"
        />
        <p>Here's what I've been doing for awhile.</p>
        <div className={`jobs__listing mt-4`}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className={`job__item mb-6`}>
              <h2 className={`text-2xl uppercase font-thin tracking-tight`}><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h2>
              <p className={`text-sm text-navy`}>{node.frontmatter.start_date} - {node.frontmatter.end_date}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Job"}}}, sort: {fields: frontmatter___end_date, order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        start_date(formatString: "MMMM YYYY")
                        end_date(formatString: "MMMM YYYY")
                    }
                }
            }
        }
    }

`
