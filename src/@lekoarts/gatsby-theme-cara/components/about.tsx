import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = () => (
  <div >
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    />
    <Divider >
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <Svg icon="upDown" stroke hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} color="icon_darkest" left="25%" top="5%" />
        <Svg icon="upDown" stroke hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="triangle" width={12} color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <img width="300" height="auto" src="/parrot-fish.png" alt="parrot fish floating in background" style={{position: "absolute", left: "30%", top: "90%"}} />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="hexa" width={8} color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
