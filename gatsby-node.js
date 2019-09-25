/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async({ graphql, actions: { createPage }}) => {
  createPage({
    path: `/screencasts`,
    component: require.resolve('./src/templates/screencasts.js'),
    context: {test: "hello world"}
  })

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
      `
  )

  const posts = result.data.allContentfulBlogPost.edges
  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: require.resolve('./src/templates/blog-post-template'),
      context: {
        slug: post.node.slug
      }
    })
  })
}