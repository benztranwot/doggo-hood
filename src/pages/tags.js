import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulDog.nodes)

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            return (
              <Link
                to={`/tags/${slugify(tag[0], { lower: true })}`}
                key={index}
                className="tag"
              >
                <h5>{tag[0]}</h5>
                <p>{tag[1]} dog(s)</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulDog {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
