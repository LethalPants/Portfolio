import React from "react"

import { Link } from "gatsby"
import "./sidebar.styles.scss"
const SideBar = () => (
  <div class="sidebar">
    <Link to="/">home</Link>
    <Link to="/">about</Link>
    <Link to="/">work</Link>
    <Link to="/">contact</Link>
  </div>
)

export default SideBar
