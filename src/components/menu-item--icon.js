import React from "react"

const bgColors = {
  gray: `bg-gray-100 bg-opacity-25 hover:bg-opacity-75 focus:bg-opacity-75 hover:bg-secondary focus:bg-secondary`,
  secondary: `bg-tertiary hover:bg-opacity-75 focus:bg-opacity-75 hover:bg-secondary focus:bg-secondary`
}

const IconMenuItem = (props) => {
  return (
    <li
      className={`inline-block mb-8 sm:mb-0`}
    >
      <a
        href={props.to}
        className={`
        ${bgColors[props.bgColor] || bgColors.gray}
          icon-link relative mx-4 no-underline block text-lg lg:text-xl text-gray-100 rounded-full h-12 w-12 flex items-center justify-center hover:text-white focus:text-tertiary shadow-inner`}
        aria-label={props.label}
      >
        {props.children}
      </a>
    </li>
  )
}

export default IconMenuItem