import * as React from 'react'
import Header from './header.js'
import { Helmet } from 'react-helmet'
import {
    layout
} from '../styles/layout.module.css'
import Headroom from 'react-headroom'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="canonical" href="https://www.curtisbabin.com" />
        </Helmet>
        
        
        <Headroom>
          <div className={layout}>
            <Header></Header>
          </div>
        </Headroom>
        
        
        <main className={layout}>
          {children}
        </main>
    </>
  )
}

export default Layout