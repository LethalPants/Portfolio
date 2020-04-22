import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import FooterStyles from "./Footer.module.scss"
import Links from "../Links/Links.component"

const Footer = () => {
  return (
    <section
      className={FooterStyles.foot}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out"
      data-sal-duration="400"
    >
      <div className={FooterStyles.name}>
        {/* eslint-disable-next-line */}
        <h1
          role="link"
          onClick={() => scrollTo("#top")}
          className={FooterStyles.heading}
        >
          Hatim Murtuza
        </h1>
        <div className={FooterStyles.horizontalRule}></div>
      </div>
      <Links classes="link-image-spread" />
    </section>
  )
}

export default Footer
