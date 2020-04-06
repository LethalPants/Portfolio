import React from "react"
import PropTypes from "prop-types"

import "../../styles/index.scss"

import Ribbon from "../Ribbon/ribbon.component"
import Sidebar from "../Sidebar/Sidebar.component"
import Links from "../Links/Links.component"

const Layout = ({ children }) => {
  return (
    <>
      <Ribbon />
      <Links />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
