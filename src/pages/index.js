import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <Banner />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`