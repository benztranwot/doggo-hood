const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query getDogs {
      allContentfulDog {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulDog.nodes.forEach(dog => {
    dog.content.tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag, { lower: true })}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
