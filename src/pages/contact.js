import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>You can contact me on rizwan.ahmed19@outlook.com</p>
      <p>
        Here's my twitter handle{" "}
        <a target="_blank" href="https://twitter.com/rzwnahmd19">
          @rzwnahmd19
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
