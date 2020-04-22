import React from "react"

import ProjectStyles from "./Projects.module.scss"
import ProjectList from "../ProjectsList/ProjectList.component"

const about = () => {
  return (
    <section
      className={ProjectStyles.work}
      id="projects"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out"
      data-sal-duration="400"
    >
      <div className={ProjectStyles.header}>
        <h1>Projects.</h1>
        <span>Apps I've Made.</span>
      </div>
      <div className={ProjectStyles.workBody}>
        <div className={ProjectStyles.content}>
          <ProjectList />
        </div>
      </div>
    </section>
  )
}
export default about
