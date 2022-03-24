import * as React from "react"
//import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Projects from "../components/projects"
import MapProjects from "../components/map-projects"
import Community from "../components/community"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <div  >
      <Hero  />
      <Mission />
      <Projects />
      <MapProjects />
      <Community />
      <About />
      <Contact />
    </div>
  </Layout>
)

export default Cara
