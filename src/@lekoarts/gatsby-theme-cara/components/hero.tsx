/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <Svg icon="upDown" stroke hiddenMobile width={38} color="icon_darker" left="40%" top="80%" />
      <Svg icon="triangle" width={8} color="icon_darker" left="25%" top="5%" />
      <Svg icon="circle" width={64} color="icon_red" left="90%" top="5%" />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="hexa" width={16} color="icon_darker" left="10%" top="50%" />
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={146} color="icon_yellow" left="80%" top="10%" />
        <Svg icon="triangle" width={12} color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="cross" width={126} color="icon_blue" left="28%" top="15%" />
        <Svg icon="upDown" stroke hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        <Svg icon="box" hiddenMobile width={140} color="icon_purple" left="5%" top="90%" />
      </UpDownWide>
      <UpDown>
        <Svg icon="triangle" hiddenMobile width={128} color="icon_red" left="10%" top="20%" />
        <img width="400" height="auto" src="/fish@2x.png" alt="fish floating in header" style={{position: "absolute", left: "60%", top: "70%"}} />
        <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
