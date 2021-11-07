import * as React from 'react'
import Navbar from './navbar/navbar.js'
import { Helmet } from 'react-helmet'
import { layout } from '../styles/layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="canonical" href="https://www.curtisbabin.com"/>
          <link rel="manifest" crossorigin="use-credentials" href="/manifest.webmanifest" />
        </Helmet>
        
        <Navbar />
        
        <main className={layout}>
          {children}
        </main>
    </>
  )
}

export default Layout