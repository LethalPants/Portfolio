import React from "react"

import Layout from "../components/Layout/Layout.component"
import SEO from "../components/seo"

import HeroArea from "../components/HeroSection/Hero.component"
import About from "../components/About/about.component"
import Projects from "../components/Projects/Projects.component"
import Footer from "../components/Footer/Footer.component"

const IndexPage = () => (
  <Layout>
    <SEO />
    <HeroArea />
    <About />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
