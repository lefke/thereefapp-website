import * as React from "react"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Hero from "../@lekoarts/gatsby-theme-cara/components/hero"
import Mission from "../@lekoarts/gatsby-theme-cara/components/mission"
import Projects from "../@lekoarts/gatsby-theme-cara/components/projects"
import MapProjects from "../@lekoarts/gatsby-theme-cara/components/map-projects"
import Community from "../@lekoarts/gatsby-theme-cara/components/community"
import People from "../@lekoarts/gatsby-theme-cara/components/people"
import Team from "../@lekoarts/gatsby-theme-cara/components/team"
import Contact from "../@lekoarts/gatsby-theme-cara/components/contact"
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
