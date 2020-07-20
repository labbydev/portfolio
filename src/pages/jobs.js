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
        <div className={`mt-4`}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div className={`mb-6`}>
                <h2 className={`text-2xl uppercase font-thin tracking-tight`}><Link
                  to={node.frontmatter.path}>{node.frontmatter.company}</Link></h2>
                <p className={`text-navy text-sm`}>{node.frontmatter.location}</p>
                {node.frontmatter.roles.map(key =>
                  <div className={`mb-2`}>
                    <h3 className={`text-lg text-pink font-semibold`}>{key.title}</h3>
                    <p className={`text-navy text-sm`}>{ key.end ? key.start + ` - ` + key.end : key.start  }</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Job"}}}, sort: {fields: frontmatter___start, order: DESC}) {
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
    }
`
