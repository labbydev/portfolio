import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Rellax from "rellax"
import MoreLink from "./more-link"

const RecentProjects = () => {
  const data = useStaticQuery(
    graphql`
      query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "Project"}}}, limit: 4, sort: {fields: frontmatter___roles___start, order: ASC}) {
        edges {
          node {
            excerpt
            frontmatter {
              client
              path
              image {
                childImageSharp {
                  resize(height: 300, width: 300, cropFocus: NORTH) {
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

  useEffect(() => {
    new Rellax(".parallax-slow", {
      speed: -2,
      wrapper: false,
    });
    new Rellax(".parallax-fast", {
      speed: 3,
      wrapper: false,
    });
  }, []);

  return (
    <div
      className={`relative`}
    >
      <h2>Projects</h2>
      <div
        className={`sm:flex justify-around flex-wrap items-center sm:mb-32 lg:mb-0 xl:mb-8 xl:mt-8`}
      >
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <div
              className={
                ((index.toString() % 2 !== 0) ? `parallax parallax-fast sm:mt-20 lg:mt-32` : `parallax parallax-slow sm:-mt-20 lg:-mt-32`) +
                `  z-20 transition ease-in-out rounded-sm overflow-hidden mb-8 sm:mb-0 shadow-2xl max-w-2xs text-center bg-white sm:inline-block sm:flex-shrink-0`}
            >
              <img
                className={`block`}
                src={node.frontmatter.image.childImageSharp.resize.src}
                alt={node.frontmatter.client + ` website`}
              />
              {/* @TODO: add back the link once project pages have real content. */}
              {/*<Link*/}
              {/*  className={`link--dark block p-3 shadow-inner`}*/}
              {/*  to={node.frontmatter.path}*/}
              {/*>*/}
                <h3
                  className={`p-3 shadow-inner`}
                >{node.frontmatter.client}</h3>
              {/*</Link>*/}
            </div>
          )
        })}
      </div>
      <MoreLink
        to={`/projects/`}
        color={`default`}
      >See all projects</MoreLink>
    </div>
  )
}

export default RecentProjects