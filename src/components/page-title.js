import React from "react"

export default function PageTitle(props) {
  return <h1
    className={`font-serif text-5xl text-pink font-black tracking-wide`}
  >{props.text}</h1>
}