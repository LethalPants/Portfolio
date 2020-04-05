import React from "react"

import AboutStyles from "./about.module.scss"
const about = () => {
  return (
    <section className={AboutStyles.aboutMe} id="aboutMe">
      <div className={AboutStyles.header}>
        <h1>About.</h1>
        <span>I like to dabble in code and design.</span>
      </div>

      <div className={AboutStyles.content}>
        <p>
          I've coded since the age of 14, started building out really small
          "apps" in Visual Basic and have continued since. Now, I design and
          develop web-apps with minimal design, subtle colors and an amazing
          user experience. Most of my work is on GitHub. I am also a stickler
          for details, dedicated to photography, coffee and music.
        </p>
        <button className={AboutStyles.buttonCV}>Download Resume</button>
      </div>
    </section>
  )
}
export default about
