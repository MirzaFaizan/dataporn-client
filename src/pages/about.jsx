import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
      <h1 className="is-size-3">We provide you weird data.</h1>
      <p style={{ marginBottom: "5%" }}>
        Hmm...?
      </p>
  </Layout>
)

export default IndexPage
