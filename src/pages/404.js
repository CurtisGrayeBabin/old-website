import * as React from "react"
import Layout from '../components/layout'
import {
  error
} from '../styles/404.module.css'


const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <section className={error}>
        <h1>404</h1>
        <p>Oops, this page doesn't exist!</p>
        <div>
          <a href="/" aria-label="Back button"><button>Home</button></a>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage;
