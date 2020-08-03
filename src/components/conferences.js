import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Conferences = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "Conference"}}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
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

  function Title(props) {
    if ((props.url !== null) && (props.subtitle !== null)) {
      return (
        <h3><a href={props.url}>{props.title}: <span>{props.subtitle}</span></a></h3>
      )
    } else if (props.subtitle !== null) {
      return (
        <h3>{props.title}: <span>{props.subtitle}</span></h3>
      )
    } else if (props.url !== null) {
      return (
        <h3><a href={props.url}>{props.title}</a></h3>
      )
    }
    else {
      return (
        <h3>{props.title}</h3>
      )
    }
  }

  return (
    <div>
      <h2>Speaking Engagements</h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div>
              <Title
                url={node.frontmatter.url}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.subtitle}
              />
              <h4>{node.frontmatter.conference}</h4>
              <p>{node.frontmatter.location}</p>
              <p>{ node.frontmatter.date }</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Conferences