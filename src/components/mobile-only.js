import React from "react"

const MobileOnly = props => (
  <div
    className={`lg:hidden`}
  >
    {props.children}
  </div>
)

export default MobileOnly