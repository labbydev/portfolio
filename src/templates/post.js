import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <div className={`content`}>
          <div className={`flex justify-around my-10`}>
            <small className={`text-gray-500`}>{ frontmatter.date }</small>
            <small className={`text-gray-500`}>{timeToRead} min read</small>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        date(formatString: "dddd | MMMM DD, YYYY")
      }
    }
  }
`
