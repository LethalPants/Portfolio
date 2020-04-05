import React from "react"
import { Link } from "gatsby"

import HeroStyles from "./hero.module.scss"
const Hero = () => (
  <section className={HeroStyles.me}>
    <h1 className={HeroStyles.heading}>
      <span className={HeroStyles.label}>Hello</span>
      <span className={HeroStyles.intro}>
        I'm Hatim and{" "}
        <Link to="/" className={HeroStyles.link}>
          I design and develop apps for the internet
        </Link>
      </span>
    </h1>

    <div className={HeroStyles.importantStuff}>
      <Link>review my life from my resume.</Link>
      <Link>send me an email.</Link>
    </div>
  </section>
)

export default Hero
