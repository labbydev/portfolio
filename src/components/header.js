import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MenuLink = props => (
  <li
    className={`inline-block mr-4`}
  >
    <Link
      className={`text-blue`}
      to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    className={`bg-navy mb-4 font-serif px-4`}
  >
    <div
      className={`container mx-auto py-4`}
    >
      <Link
        to="/"
        className={`text-white`}
      >
        {siteTitle}
      </Link>
      <nav>
        <ul
          className={`list-none `}
        >
          <MenuLink to={`/about/`}>About</MenuLink>
          <MenuLink to={`/contact/`}>Contact</MenuLink>
          <MenuLink to={`/experience/`}>Experience</MenuLink>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
