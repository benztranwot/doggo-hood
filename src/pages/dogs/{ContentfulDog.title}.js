import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsHeart, BsBoxArrowDown, BsArrowsExpand } from "react-icons/bs"
import Layout from "../../components/Layout"
import slugify from "slugify"
import SEO from "../../components/SEO"

const DogTemplate = ({ data }) => {
  const {
    title,
    lifeSpan,
    height,
    weight,
    image,
    description: { description },
    content: { tags, temperament, breedGroup, moreInfo },
  } = data.contentfulDog

  const breedCharacteristics = [
    "Child Friendly",
    "Exercise Needs",
    "Grooming",
    "Trainability",
  ]

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="dog-page">
          {/* hero */}
          <section className="dog-hero">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="about-img"
            />
            <article className="dog-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="dog-icons">
                <article>
                  <BsHeart />
                  <h5>life span</h5>
                  <p>{lifeSpan} years</p>
                </article>
                <article>
                  <BsArrowsExpand />
                  <h5>height</h5>
                  <p>{height} cm</p>
                </article>
                <article>
                  <BsBoxArrowDown />
                  <h5>weight</h5>
                  <p>{weight} kg</p>
                </article>
              </div>
              {/* tags */}
              <p className="dog-tags">
                Tags:{" "}
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/tags/${slugify(tag, { lower: true })}`}
                  >
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="dog-content">
            <article>
              <h4>Breed Characteristics</h4>
              {moreInfo.map((item, index) => (
                <div key={index} className="single-characteristic">
                  <header>
                    <p>{breedCharacteristics[index]}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>temperaments</h4>
                {temperament.map((item, index) => (
                  <p key={index} className="single-temperament">
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <h4>breed group</h4>
                {breedGroup.map((item, index) => (
                  <p key={index} className="single-breed">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleDog($title: String) {
    contentfulDog(title: { eq: $title }) {
      title
      lifeSpan
      height
      weight
      content {
        tags
        breedGroup
        temperament
        moreInfo
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default DogTemplate
