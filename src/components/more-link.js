import React from "react"
import { Link } from "gatsby"
import { MoreHorizontal, ChevronsRight } from "react-feather"

const colors = {
  default: ``,
  light: `text-gray-100`,
  dark: `text-tertiary-dark`,
}

const MoreLink = ({color, children, to}) => {
  return (
    <Link
      className={ colors[color] + ` more-link absolute bottom-0 right-0 flex items-center uppercase tracking-wider text-sm`}
      to={to}
    >
      <span
        className={`flex relative z-10 items-center -mt-4 leading-none transform translate-x-20 transition duration-500 ease-in-out`}
      >
        {children}
        <ChevronsRight
          className={`-mt-1 opacity-0 transition duration-500 ease-in-out`}
          size={30}
          strokeWidth={1.5}
        />
      </span>
      <MoreHorizontal
        className={`opacity-50`}
        color={(color  === 'light') ? `#4F0224` : `#F9C577`}
        size={100}
        strokeWidth={3}
      />
    </Link>
  )
}

export default MoreLink