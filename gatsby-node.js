exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  return graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            databaseId
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    const BlogPosts = result.data.allWpPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: BlogPostTemplate,
        context: {
          id: post.node.databaseId,
        },
      })
    })
  })

}
