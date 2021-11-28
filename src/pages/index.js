import * as React from "react"
import Layout from '../components/utilities/layout'
import Hero from '../components/sections/hero/hero'
import Education from '../components/sections/education/education'
import Portfolio from '../components/sections/portfolio/portfolio'
import Contact from '../components/sections/contact/contact'
import { heroWrap, componentWrap, blueBackgroundWrap } from '../global styles/index.module.css'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">

        <div className={heroWrap}>
          <Hero />
        </div>

        <div className={blueBackgroundWrap} id="portfolio">
          <Portfolio />
        </div>
        
        <div className={componentWrap} id="contact" style={{'marginTop':'2rem'}}>
          <Contact />
        </div>

        <div className={blueBackgroundWrap} id="education">
          <Education />  
        </div>  

    </Layout>
  )
}

export default IndexPage
