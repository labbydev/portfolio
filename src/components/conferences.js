import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MapPin, Hexagon } from "react-feather"

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
                date(formatString: "MMMM YYYY")
                location
                url
                image {
                  childImageSharp {
                    resize (height:300, width:500, fit: CONTAIN) {
                      src
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

  function Title(props) {
    if ((props.url !== null) && (props.subtitle !== null)) {
      return (
        <h3>
          <a href={props.url} className={`inline-block`}>{props.title}
            <span
              className={`block text-sm`}
            >{props.subtitle}</span>
          </a>
        </h3>
      )
    } else if (props.subtitle !== null) {
      return (
        <h3>{props.title}: <span className={`block text-sm`}>{props.subtitle}</span></h3>
      )
    } else if (props.url !== null) {
      return (
        <h3><a href={props.url} className={`inline-block`}>{props.title}</a></h3>
      )
    }
    else {
      return (
        <h3>{props.title}</h3>
      )
    }
  }

  function Location(props) {
    if (props.location !== null) {
      return (
        <small className={`text-gray-500`}>
          <MapPin
            className={`inline-block h-5 -mt-1`}
            strokeWidth={1}
          />
          { props.location }
          <Hexagon
            className={`fill-current inline-block h-2 w-4 -mt-1`}
            strokeWidth={.5}
          />
          {props.date}
        </small>
      )
    } else return null
  }

  return (
    <div>
      <h2>Speaking Engagements</h2>
      <div
        className={`lg:grid grid-cols-2 gap-4`}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div
              className={`mb-8 text-center`}
            >
              <img
                className={`block mx-auto shadow-xl`}
                src={node.frontmatter.image.childImageSharp.resize.src}
                alt={node.frontmatter.title + ` title slide`}
              />
              <Title
                url={node.frontmatter.url}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.subtitle}
              />
              <h4>{node.frontmatter.conference}</h4>
              <Location
                location={node.frontmatter.location}
                date={node.frontmatter.date}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Conferences