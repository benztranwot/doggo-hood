import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const DogsList = ({ dogs = [] }) => {
  return (
    <div className="dogs-list">
      {dogs.map(dog => (
        <Link
          to={`/dogs/${slugify(dog.title, { lower: true })}`}
          key={dog.id}
          className="dog"
        >
          <GatsbyImage
            image={getImage(dog.image)}
            className="dog-img"
            alt={dog.title}
          />
          <h5>{dog.title}</h5>
          <p>
            Height: {dog.height}cm | Weight: {dog.weight}kg
          </p>
        </Link>
      ))}
    </div>
  )
}

export default DogsList
