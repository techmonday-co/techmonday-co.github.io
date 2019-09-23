import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { black } from "ansi-colors"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const bannerContent = {
    backgroundColor: 'black',
    backgroundImage: data.file
  }

  return (
    <div className="banner">
      <div className="content" style={bannerContent}></div>
    </div>
  )
}

export default Banner
