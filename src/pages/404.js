import * as React from "react"
import Layout from '../components/layout'
import {
  error
} from '../styles/404.module.css'
import { top, oneLiner } from '../styles/layout.module.css'
import { Link } from 'gatsby'


const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <section className={error}>
        <h1 className={`animate-pulse ${top}`}>404</h1>
        <p className={oneLiner}>Oops, this page doesn't exist!</p>
        <div>
          <Link to="/"><button>Home</button></Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage;
