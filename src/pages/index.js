import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Credible from '../components/credible'
import Portfolio from '../components/portfolio'
import { componentWrap } from '../styles/index.module.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
        <div className={componentWrap}>
          <Hero />
        </div>
        
        <div className={componentWrap}>
          <Credible />  
        </div>  

        <div className={componentWrap}>
          <Portfolio />
        </div>
    </Layout>
  )
}

export default IndexPage
