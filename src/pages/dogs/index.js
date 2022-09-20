import React from "react"
import Layout from "../../components/Layout"
import AllDogs from "../../components/AllDogs"
import SEO from "../../components/SEO"

const Dogs = () => {
  return (
    <Layout>
      <SEO title="Dogs" />
      <main className="page">
        <AllDogs />
      </main>
    </Layout>
  )
}

export default Dogs
