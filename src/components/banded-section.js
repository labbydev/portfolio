import React from "react"

const backgroundColors = {
  default: `bg-transparent`,
  primary: `bg-primary-dark`,
  secondary: `bg-secondary-dark`,
  tertiary: `bg-tertiary-dark`,
  gray: `bg-gray-100`,
}

const textColors = {
  light: `text-white`,
}

const BandedSectiton = ({ children, backgroundColor, textColor, classes }) => {
  return (
    <div className={`
      ${backgroundColors[backgroundColor] || backgroundColors.default}
      ${textColor ? textColors[textColor] : ''}
      ${classes ? classes : ''}
      py-6 sm:py-10 lg:py-8 xl:py-12 overflow-hidden w-screen -ml-50 relative left-1/2 shadow-inner
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