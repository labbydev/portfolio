import React from "react"

const Lede = (props) => (
  <p
    className={`text-lg text-tertiary font-semibold text-center tracking-wide`}
  >
    {props.text}
  </p>
)

export default Lede