import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Projects from "../components/projects"
import MapProjects from "../components/map-projects"
import Community from "../components/community"
import People from "../components/people"
import Team from "../components/team"
import Contact from "../components/contact"
import { useColorMode } from "theme-ui"

const TheReefApp = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `light`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `dark` : 'light')
    }
  return (
  <Layout>
    <div>
      <Hero  />
      <Projects />
      <Mission />
      <MapProjects />
      <Community />
    {/*  <People /> */}
      <Team />
      <Contact />
    </div>
  </Layout>
)
}

export default TheReefApp
