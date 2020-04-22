import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import HeroStyles from "./hero.module.scss"
const Hero = () => (
  <section
    className={HeroStyles.me}
    id="top"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease-out"
    data-sal-duration="400"
  >
    <h1 className={HeroStyles.heading}>
      <span className={HeroStyles.label}>Hello,</span>
      <span className={HeroStyles.intro}>
        I'm Hatim, and {/* eslint-disable-next-line */}
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
      {/*eslint-disable-next-line*/}
      <span
        onClick={() => {
          window.open("/HatimResume.pdf")
        }}
        role="link"
      >
        review my life from my resume.
      </span>
      <a href="mailto:hatimmurtuzayt@gmail.com">send me an email.</a>
    </div>
  </section>
)

export default Hero
