import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Button } from 'react-bootstrap'

import "../styles/components/post-cover.scss"

export default ({ post }) => (
  <div className="post-cover card">
    <div className="post-header text-center">
      <h5>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h5>
      <small>{post.publishDate}</small>
    </div>
    <div className="card-body mt-2 p-0">
      <Link to={`/blog/${post.slug}`}>
        <Img alt="" fluid={post.heroImage.fluid} className="card-img-top" />
      </Link>
      <p className="card-text" dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }} />

      <Link to={`/blog/${post.slug}`}>
        <Button variant="dark" size='sm' block>Continue Reading</Button>
      </Link>

      {post.tags.map(tag => (
        <p key={tag} className='post-category'>
          {tag}
        </p>
      ))}
    </div>
  </div>
)
