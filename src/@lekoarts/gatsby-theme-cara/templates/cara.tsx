import * as React from "react"
//import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <div  >
      <Hero  />
      <Projects />
      <About />
      <Contact />
    </div>
  </Layout>
)

export default Cara
