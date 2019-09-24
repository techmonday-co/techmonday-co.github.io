import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="content">
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className="headline text-center w-100">
          You. Me. Technology. Coding.
        </div>
      </div>
    </div>
  )
}

export default Banner
