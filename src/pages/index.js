import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">

      <Hero></Hero>

      <div style={{height: '900vh'}}></div>
    </Layout>
  )
}

export default IndexPage
