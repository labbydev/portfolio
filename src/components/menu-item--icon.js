import React from "react"

const IconMenuItem = props => (
  <li
    className={`inline-block`}
  >
    <a
      href={props.to}
      className={`icon-link relative mx-4 no-underline block text-lg lg:text-xl text-gray-100 bg-gray-100 bg-opacity-25 rounded-full h-12 w-12 flex items-center justify-center hover:bg-secondary focus:bg-secondary`}
      aria-label={props.label}
    >
      {props.children}
    </a>
  </li>
)

export default IconMenuItem