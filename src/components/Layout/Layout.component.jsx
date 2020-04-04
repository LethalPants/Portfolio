import React from "react"
import PropTypes from "prop-types"

import "../../styles/index.scss"

import Ribbon from "../Ribbon/ribbon.component"
import Sidebar from "../Sidebar/Sidebar.component"

const Layout = ({ children }) => {
  return (
    <>
      <Ribbon />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
