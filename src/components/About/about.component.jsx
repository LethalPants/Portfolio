import React from "react"

import AboutStyles from "./about.module.scss"
const about = () => {
  return (
    <section
      className={AboutStyles.aboutMe}
      id="aboutMe"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out"
      data-sal-duration="400"
    >
      <div className={AboutStyles.header}>
        <h1>About.</h1>
        <span>I like to dabble in code and design.</span>
      </div>

      <div className={AboutStyles.content}>
        <p>
          I've been developing since I was a kid, it all started out with "apps"
          built in Visual Basic. Now, I design and develop web-apps with minimal
          design, subtle colors, and a fantastic user experience. I am a
          Sophomore majoring in Computer Science. In college, I spend most of my
          time quite literally breaking algorithms and training neural nets. I
          also am a stickler for details, dedicated to photography. Coffee,
          videogames, and music are also some of the topics you can use to start
          a conversation with me.
        </p>
        <button
          className={AboutStyles.buttonCV}
          onClick={() => {
            window.open("/HatimResume.pdf")
          }}
        >
          Download Resume
        </button>
      </div>
    </section>
  )
}
export default about
