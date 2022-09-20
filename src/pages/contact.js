import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import DogsList from "../components/DogsList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const { nodes: dogs } = data.allContentfulDog

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Kale chips cronut gochujang qui af mixtape in scenester ascot
              pitchfork vibecession hell of photo booth. Beard glossier
              asymmetrical before they sold out bruh.
            </p>
            <p>
              Cardigan pour-over chia voluptate mukbang tumeric next level
              pickled mollit intelligentsia duis art party vibecession.
            </p>
            <p>
              Drinking vinegar et magna food truck chia do. Pitchfork ullamco
              woke brunch hoodie shoreditch aute. Freegan sint stumptown
              portland. Truffaut mixtape etsy next level ea.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xyyveopn"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
