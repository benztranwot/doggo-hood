import React from "react"
import TagsList from "./TagsList"
import DogsList from "./DogsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    allContentfulDog(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        height
        weight
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllDogs = () => {
  const data = useStaticQuery(query)
  const { nodes: dogs } = data.allContentfulDog
  return (
    <section className="dogs-container">
      <TagsList dogs={dogs} />
      <DogsList dogs={dogs} />
    </section>
  )
}

export default AllDogs
