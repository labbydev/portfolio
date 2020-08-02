import React from "react"

const backgroundColors = {
  default: `bg-transparent`,
  secondary: `bg-secondary-dark`,
  tertiary: `bg-tertiary-dark`,
  gray: `bg-gray-100`,
}

const textColors = {
  light: `text-white`,
}

const BandedSectiton = ({ children, backgroundColor, textColor }) => {
  return (
    <div className={`
      ${backgroundColors[backgroundColor] || backgroundColors.default}
      ${textColors[textColor] || ``}
      py-4 w-screen -ml-50 relative left-1/2 shadow-md
    `}>
      <div
        className={`container mx-auto px-4`}
      >
        {children}
      </div>
    </div>
  )
}

export default BandedSectiton