import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <p>This is the Virtual Vikoin Store!</p>
        <p>
          Something not working? <Link to="/contact">Reach out!</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
