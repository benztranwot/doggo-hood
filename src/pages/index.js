import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllDogs from "../components/AllDogs"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="dog image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Doggo Hood</h1>
              <h4>No robin, just fluff</h4>
            </div>
          </div>
        </header>
        <AllDogs />
      </main>
    </Layout>
  )
}
