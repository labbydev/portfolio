import React from "react"

const IconMenuItem = props => (
  <li
    className={`inline-block`}
  >
    <a
      href={props.to}
      className={`icon-link relative mx-4 no-underline block text-lg lg:text-xl text-gray-100 bg-gray-100 bg-opacity-25 rounded-full h-12 w-12 flex items-center justify-center hover:bg-secondary hover:bg-opacity-75 hover:text-tertiary focus:bg-opacity-75 focus:text-tertiary focus:bg-secondary shadow-inner`}
      aria-label={props.label}
    >
      {props.children}
    </a>
  </li>
)

export default IconMenuItem