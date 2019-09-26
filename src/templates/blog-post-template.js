import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'


import '../styles/templates/blog-post-template.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <Container>
          <Row>
            <Col>
              <h1 className="section-headline">{post.title}</h1>
              <p>
                <small>{post.publishDate}</small>
              </p>
            </Col>
          </Row>
          <div style={{ background: '#fff' }}>
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <div className='hero'>
              <Img className='heroImage' alt={post.title} fluid={post.heroImage.fluid} />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
