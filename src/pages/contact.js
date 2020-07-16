import React from "react"
import { Link } from "gatsby"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div>
        <Link to="/">Home</Link>
        <PageTitle
          text="Contact"
        />
        <p>Call me. Beep me. Here is how to reach me.</p>
      </div>
    </Layout>
  )
}