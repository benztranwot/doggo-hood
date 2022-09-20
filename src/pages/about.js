import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import DogsList from "../components/DogsList"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const { nodes: dogs } = data.allContentfulDog

  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby ut gentrify dreamcatcher.</h2>
            <p>
              Single-origin coffee lo-fi man bun snackwave enim salvia
              meditation proident jean shorts ennui hell of 8-bit adaptogen.
            </p>
            <p>
              Ullamco biodiesel narwhal nisi la croix quinoa small batch wolf
              gatekeep, neutra vape raclette est. Hammock pickled brunch in
              cupidatat franzen.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="dog image"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-dogs">
          <h5>Look at these happy buddies</h5>
          <DogsList dogs={dogs} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulDog(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        height
        weight
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      totalCount
    }
  }
`

export default About
