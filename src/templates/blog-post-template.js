import React from "react"
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    
    return (
      <Layout>
        <SEO title={siteTitle} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

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