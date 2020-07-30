import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import MenuItem from "./menu-item"

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height:50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <header
      className={`bg-primary leading-none`}
    >
      <div
        className={`container mx-auto flex content-between py-4 flex content-between items-center justify-between`}
      >
        <Link
          to="/"
          className={`font-serif font-black tracking-wide text-secondary-darker no-underline text-3xl inline-block flex items-center`}
        >
          <Img
            fixed={logo.file.childImageSharp.fixed}
            alt={`logo L.A.B.`}
            className={`mr-2`}
          />
          {siteTitle}
        </Link>
        <nav className={``}>
          <ul
            className={`flex uppercase tracking-tighter text-sm font-semibold`}
            aria-label={`Primary`}
          >
            <MenuItem to={`/about/`}>About</MenuItem>
            <MenuItem to={`/experience/`}>Experience</MenuItem>
            <MenuItem to={`/projects/`}>Projects</MenuItem>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
