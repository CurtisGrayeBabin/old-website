import * as React from 'react'
import Navbar from '../navbar/navbar.js'
import { Helmet } from 'react-helmet'
import { layout } from '../../global styles/layout.module.css'

// format of each page (not just Home page)
const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <meta name="description" content="The personal website of Curtis Babin, a front-end developer, that contains his education and portfolio" />
          <link rel="canonical" href="https://www.curtisbabin.com"/>
          <meta name="author" content="Curtis Babin"></meta>
          <meta name="keywords" content="Curtis, Babin, front, end, developer, full, stack, software, engineer, JavaScript, Node, react, Udacity, graduate"></meta>
          <link rel="manifest" crossorigin="use-credentials" href="/manifest.webmanifest" />
        </Helmet>
        
        <header>
          <Navbar />
        </header>
        
        <main className={layout}>
          {children}
        </main>
    </>
  )
}

export default Layout