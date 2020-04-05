import React from "react"

import Layout from "../components/Layout/Layout.component"
import SEO from "../components/seo"

import HeroArea from "../components/HeroSection/Hero.component"
import About from "../components/About/about.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroArea />
    <About />
  </Layout>
)

export default IndexPage
