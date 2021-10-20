import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Credible from '../components/credible'

const componentWrap = {
    height: '100vh',
    position:'static'
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">

      <div style={componentWrap}>
        <Hero />
      </div>

      <div style={componentWrap}>
        <Credible />
      </div>
      
    </Layout>
  )
}

export default IndexPage
