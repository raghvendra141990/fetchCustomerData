import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Customer from "../components/Customer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ maxWidth: `900px`, marginTop: `1.45rem` }}>Customer Data</h2>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
    <Customer />
    </div>
  </Layout>
)
export default IndexPage
