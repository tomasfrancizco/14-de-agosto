import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {

  let [message, setMessage] = React.useState("快来了")

  React.useEffect(() => {
    const changeMessage = setInterval(() => {
      if(message == "快来了") {
        setMessage("PRÓXIMAMENTE");
      }
      if(message == "PRÓXIMAMENTE"){
        setMessage("COMING SOON")
      }
      if(message == "COMING SOON"){
        setMessage("快来了")
      }
    }, 3000)
    return () => clearInterval(changeMessage)
  }, [message])

  return (
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
          style={{"width": "15rem", "marginBottom": "50px"}}
        />
          <h1 id="proximamente">{message}</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
