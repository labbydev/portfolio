import React from "react"

const DesktopOnly = props => (
  <div
    className={`hidden lg:inline-block`}
  >
    {props.children}
  </div>
)

export default DesktopOnly