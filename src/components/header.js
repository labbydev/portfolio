import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const MenuLink = props => (
  <li>
    <Link
      to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height:80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <header
      className={`bg-primary`}
    >
      <div
        className={`container mx-auto flex xl:max-width-screen-xl lg:max-width-screen-lg md:max-width-screen-md sm:max-width-screen-sm`}
      >
        <Img
          fixed={logo.file.childImageSharp.fixed}
          alt={`logo L.A.B.`}
          className={`m-4`}
        />
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
        <nav>
          <ul>
            <MenuLink to={`/about/`}>About</MenuLink>
            <MenuLink to={`/experience/`}>Experience</MenuLink>
            <MenuLink to={`/projects/`}>Projects</MenuLink>
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
