import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={6.4} >
      <Hero offset={0} factor={1} style={{ height: "auto" }} />
      <Projects offset={1} factor={3} style={{ height: "auto" }} />
      <About offset={4} factor={1.5} style={{ height: "auto" }} />
      <Contact offset={5} factor={1.5} style={{ height: "auto" }} />
    </Parallax>
  </Layout>
)

export default Cara
