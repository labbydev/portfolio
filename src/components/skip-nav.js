import React from "react"

const SkipNav = () => (
  <a
    id={`skip-link`}
    href={`#main-content`}
    className={`bg-secondary text-white font-normal no-underline block absolute z-50 p-2 shadow-md max-w-xs transform -translate-y-full focus:translate-y-0 mx-auto inset-x-0 text-center`}
  >
    Skip to main content
  </a>
)

export default SkipNav