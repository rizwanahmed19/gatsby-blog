import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        Hello. I'm Rizwan, a front-end developer currently learning GatsbyJS
      </p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
