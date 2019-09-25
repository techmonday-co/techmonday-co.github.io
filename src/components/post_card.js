import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ post }) => (
  <div className="card">
    <Img alt="" fluid={post.heroImage.fluid} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h5>
      <p className="card-text" dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }} />
      <small>{post.publishDate}</small>

      {post.tags.map(tag => (
        <p key={tag}>
          {tag}
        </p>
      ))}
    </div>
  </div>
)
