import React from "react"
import { graphql } from 'gatsby'
import _ from 'lodash'
import get from 'lodash/get'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import PostCard from "../components/post_card"

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    
    return (
      <Layout>
        <SEO title={siteTitle} />
        <Banner />
        <Container className="hilight">
          {_.chunk(posts, 3).map((postRow, index) => {
            return (
              <Row key={"row-#{index}"}>
                {
                  postRow.map((post) => {
                    return <Col key={post.node.slug}>
                      <PostCard post={post.node}></PostCard>
                    </Col>
                  })
                }
              </Row>
            )
          })
          }
        </Container>
      </Layout>
    )
  }
}

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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`