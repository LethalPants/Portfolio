import React from "react"

import Layout from "../components/Layout/Layout.component"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 10%",
      }}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out"
      data-sal-duration="400"
    >
      <div>
        <h4 style={{ margin: 0, fontSize: "calc(2vw + 2em)" }}>404 Error</h4>
        <p style={{ margin: 0, fontSize: "calc(1.5vw + 0.5em)" }}>
          Looks like you're lost... the sadness
        </p>
        <Link
          to="/"
          style={{
            cursor: "pointer",
            display: "block",
            marginTop: "20px",
            width: "max-content",
            fontWeight: 700,
          }}
        >
          Go back
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
