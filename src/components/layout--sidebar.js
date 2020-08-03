/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"
import Layout from "./layout"
import SEO from "./seo"

const LayoutSidebar = ({ main, sidebar, header, footer, pageTitle }) => {

  return (
    <Layout>
      <SEO title={pageTitle}/>
      {header}
      <div
        className={`lg:flex`}
      >
        <section
          className={`lg:w-2/3`}
        >
          {main}
        </section>
        <aside
          className={`lg:w-1/3 text-sm`}
        >
          {sidebar}
        </aside>
      </div>
      {footer}
    </Layout>
  )
}

export default LayoutSidebar
