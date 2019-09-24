import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <Banner />
    <Container>
      <Row>
        <Col>test</Col>
        <Col>test</Col>
        <Col>test</Col>
      </Row>
    </Container>
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