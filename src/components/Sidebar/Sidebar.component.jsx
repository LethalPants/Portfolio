import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./sidebar.styles.scss"
const SideBar = () => (
  <div
    className="sidebar"
    data-sal="fade"
    data-sal-delay="100"
    data-sal-easing="ease-in-out"
    data-sal-duration="300"
  >
    {/* eslint-disable-next-line */}
    <span onClick={() => scrollTo("#top")} role="link">
      home{" "}
    </span>
    {/* eslint-disable-next-line */}
    <span onClick={() => scrollTo("#aboutMe")} role="link">
      about
    </span>
    {/* eslint-disable-next-line */}
    <span onClick={() => scrollTo("#projects")} role="link">
      Projects
    </span>
  </div>
)

export default SideBar
