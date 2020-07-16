import React from "react"
import { Link } from "gatsby"
import PageTitle from "../components/page-title"

export default function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <PageTitle
        text="Contact"
      />
      <p>Call me. Beep me. Here is how to reach me.</p>
    </div>
  )
}