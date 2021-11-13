import * as React from "react"
import Layout from '../components/utilities/layout'
import Hero from '../components/sections/hero/hero'
import Credible from '../components/sections/education/education'
import Portfolio from '../components/sections/portfolio/portfolio'
import { heroWrap, componentWrap, educationWrap } from '../global styles/index.module.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">

        <div className={heroWrap}>
          <Hero />
        </div>
        
        <div className={educationWrap} id="education">
          <Credible />  
        </div>  

        <div className={componentWrap} id="portfolio">
          <Portfolio />
        </div>
    </Layout>
  )
}

export default IndexPage
