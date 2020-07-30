import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import MenuItem from "./menu-item"
import MenuToggle from "./menu-toggle"

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
      className={`bg-primary leading-none px-4`}
    >
      <div
        className={`container mx-auto flex content-between py-4 flex content-between items-center justify-between`}
      >
        <Link
          to="/"
          className={`font-serif font-black tracking-wide text-secondary-darker no-underline text-xl lg:text-3xl inline-block flex items-center`}
        >
          <Img
            fixed={logo.file.childImageSharp.fixed}
            alt={`logo L.A.B.`}
            className={`mr-2`}
          />
          {siteTitle}
        </Link>
        <MenuToggle>
          <nav
            className={`absolute left-0 bg-primary w-full h-full`}
          >
            <ul
              className={`uppercase tracking-tighter text-sm font-semibold lg:flex`}
              aria-label={`Primary`}
            >
              <MenuItem to={`/about/`}>About</MenuItem>
              <MenuItem to={`/experience/`}>Experience</MenuItem>
              <MenuItem to={`/projects/`}>Projects</MenuItem>
            </ul>
          </nav>
        </MenuToggle>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
