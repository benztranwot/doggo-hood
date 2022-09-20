import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import DogsList from "../components/DogsList"
import SEO from "../components/SEO"
import capitalizeStr from "../utils/capitalizeStr"

const TagTemplate = ({ data, pageContext }) => {
  const { nodes: dogs } = data.allContentfulDog

  return (
    <Layout>
      <SEO title={capitalizeStr(pageContext.tag)} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-dogs">
          <DogsList dogs={dogs} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getDogByTag($tag: String) {
    allContentfulDog(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        height
        weight
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
