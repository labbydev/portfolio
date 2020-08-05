import { Link } from "gatsby"
import React from "react"

const MenuItem = props => (
  <li
    className={`mt-3 lg:mt-0`}
  >
    <Link
      to={props.to}
      className={`no-underline block mx-4 bracket-link hover:text-secondary-dark focus:text-secondary-dark`}
      activeClassName={`text-secondary-dark text-shadow`}
    >
      {props.children}
    </Link>
  </li>
)

export default MenuItem