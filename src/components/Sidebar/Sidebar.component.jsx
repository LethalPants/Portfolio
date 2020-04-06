import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./sidebar.styles.scss"
const SideBar = () => (
  <div className="sidebar">
    <span onClick={() => scrollTo("#top")} role="link">
      home{" "}
    </span>
    <span onClick={() => scrollTo("#aboutMe")} role="link">
      about
    </span>
    <span onClick={() => scrollTo("#projects")} role="link">
      Projects
    </span>
    <span to="/">contact</span>
  </div>
)

export default SideBar
