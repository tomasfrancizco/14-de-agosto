import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        id="14_de_agosto_logo_main"
        src="../images/favicon.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="14 de agosto logo"
        style={{"width": "10rem"}}
      />
      <h1>Sitio en construcción.</h1>
    </div>
  </Layout>
)

export default IndexPage
