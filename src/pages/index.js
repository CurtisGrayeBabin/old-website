import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Credible from '../components/credible'
import Portfolio from '../components/portfolio'

const componentWrap = {
    'marginTop': '5vh',
    'marginBottom': '5vh',
    'minHeight': '100vh',
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

      <div style={componentWrap}>
        <Portfolio />
      </div>

      
    </Layout>
  )
}

export default IndexPage
