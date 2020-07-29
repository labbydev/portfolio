import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MenuLink = props => (
  <li>
    <Link
      to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
