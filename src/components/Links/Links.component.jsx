import React from "react"
import PropTypes from "prop-types"

import "./Links.styles.scss"

import Github from "../../images/icons/github.svg"
import Instagram from "../../images/icons/instagram.svg"
import LinkedIn from "../../images/icons/linkedin.svg"
import Mail from "../../images/icons/mail.svg"

const Links = ({ classes }) => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="100"
      data-sal-easing="ease-in-out"
      data-sal-duration="300"
    >
      <div className={`${classes ? "header-links-center" : "header-links"}`}>
        <a
          href="https://github.com/LethalPants"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="Github"
            className={`header-Link-Image ${classes ? classes : ""} `}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/hatimmurtuza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className={`header-Link-Image ${classes ? classes : ""} `}
          />
        </a>
        <a
          href="https://www.instagram.com/hatimmurtuza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className={`header-Link-Image ${classes ? classes : ""} `}
          />
        </a>
        <a
          href="mailto:hatimmurtuza10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Mail}
            alt="Mail"
            className={`header-Link-Image ${classes ? classes : ""} `}
          />
        </a>
      </div>
    </div>
  )
}

Links.propTypes = {
  classes: PropTypes.string,
}

export default Links
