import React from "react"
import { Link } from "gatsby"

import "./hero.styles.scss"
const Hero = () => (
  <section className="hero-me">
    <h1 className="hero-heading">
      <span className="hero-label">Hello</span>
      <span>
        I'm Hatim and{" "}
        <Link to="/" className="hero-link">
          I design and develop apps for the internet
        </Link>
      </span>
    </h1>

    <div className="hero-ltis">
      <Link>review my life from my resume.</Link>
      <Link>send me an email.</Link>
    </div>
  </section>
)

export default Hero
