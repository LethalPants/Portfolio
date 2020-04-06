import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import HeroStyles from "./hero.module.scss"
const Hero = () => (
  <section className={HeroStyles.me} id="top">
    <h1 className={HeroStyles.heading}>
      <span className={HeroStyles.label}>Hello,</span>
      <span className={HeroStyles.intro}>
        I'm Hatim and{" "}
        <span
          role="link"
          onClick={() => scrollTo("#projects")}
          className={HeroStyles.link}
        >
          I make apps for the internet
        </span>
        .
      </span>
    </h1>

    <div className={HeroStyles.importantStuff}>
      <Link to="/">review my life from my resume.</Link>
      <a href="mailto:hatimmurtuzayt@gmail.com">send me an email.</a>
    </div>
  </section>
)

export default Hero
