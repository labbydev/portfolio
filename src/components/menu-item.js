import { Link } from "gatsby"
import React from "react"

const MenuItem = props => (
  <li
    className={`ml-4`}
  >
    <Link
      to={props.to}
      className={`inline-block no-underline`}
    >
      {props.children}
    </Link>
  </li>
)

export default MenuItem