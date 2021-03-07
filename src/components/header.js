import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import FadeIn from "react-fade-in"
import MenuItem from "./menu-item"
import MenuToggle from "./menu-toggle"
import MobileOnly from "./mobile-only"
import DesktopOnly from "./desktop-only"

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height:35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <header
      className={`bg-primary px-4 shadow-md`}
    >
      <div
        className={`container mx-auto py-4 flex items-center justify-between`}
      >
        <Link
          to="/"
          className={`logo text-shadow font-serif font-bold text-white no-underline text-xl lg:text-3xl inline-block flex items-center italic tracking-wide`}
        >
          <Img
            fixed={logo.file.childImageSharp.fixed}
            fadeIn={false}
            alt={`logo L.A.B.`}
            className={`mr-2`}
          />
          {siteTitle}
        </Link>
        <MobileOnly>
          <MenuToggle>
            <nav
              className={`absolute left-0 bg-primary w-full p-4 z-50 shadow-md`}
            >
              <ul
                className={`uppercase tracking-wider text-sm font-semibold mt-4`}
                aria-label={`Primary`}
              >
                <FadeIn>
                  <MenuItem to={`/experience/`}>Experience</MenuItem>
                  <MenuItem to={`/projects/`}>Projects</MenuItem>
                  <MenuItem to={`/about/`}>About</MenuItem>
                </FadeIn>
              </ul>
            </nav>
          </MenuToggle>
        </MobileOnly>
        <DesktopOnly>
          <nav>
            <ul
              className={`uppercase tracking-wider text-sm font-semibold flex align-bottom`}
              aria-label={`Primary`}
            >
              <MenuItem to={`/experience/`}>Experience</MenuItem>
              <MenuItem to={`/projects/`}>Projects</MenuItem>
              <MenuItem to={`/about/`}>About</MenuItem>
            </ul>
          </nav>
        </DesktopOnly>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
