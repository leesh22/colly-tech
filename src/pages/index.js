import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const wrapperStyle = {
  padding: "50px"
}

const logoStyle= {
  width: "70%",
  marginBottom: "50px"
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={wrapperStyle}>
      <Image style={logoStyle}></Image>
      <h2>ready for development</h2>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
