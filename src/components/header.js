import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className={`bg-navy mb-4 font-serif`}
  >
    <div
      className={`container mx-auto py-4`}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={`text-white`}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
