import React from "react"

const Lede = (props) => (
  <p
    className={`text-lg lg:text-xl text-tertiary font-medium text-center tracking-wide my-4 leading-relaxed lg:leading-loose`}
  >
    {props.text}
  </p>
)

export default Lede