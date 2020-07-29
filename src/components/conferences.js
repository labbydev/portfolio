import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
        <Link to={props.url}>
          <h3 className={`text-2xl uppercase font-thin tracking-tight`}>
            {props.title}
            <span>{props.subtitle}</span>
          </h3>
        </Link>
      )
    } else if (props.subtitle !== null) {
      return (
        <h3 className={`text-2xl uppercase font-thin tracking-tight`}>
          {props.title}: <span>{props.subtitle}</span>
        </h3>
      )
    } else if (props.url !== null) {
      return (
        <Link to={props.url}>
          <h3 className={`text-2xl uppercase font-thin tracking-tight`}>
            {props.title}
          </h3>
        </Link>
      )
    }
    else {
      return (
        <h3 className={`text-2xl uppercase font-thin tracking-tight`}>{props.title}</h3>
      )
    }
  }

  return (
    <div>
      <h2>Speaking Engagements</h2>
      <div className={`mt-4`}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={`mb-6`}>
              <Title
                url={node.frontmatter.url}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.subtitle}
              />
              <h4 className={`text-lg text-pink font-semibold`}>{node.frontmatter.conference}</h4>
              <p className={`text-navy text-sm`}>{node.frontmatter.location}</p>
              <p className={`text-navy text-sm`}>{ node.frontmatter.date }</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Conferences