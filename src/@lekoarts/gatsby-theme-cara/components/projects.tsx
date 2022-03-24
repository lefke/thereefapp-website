/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = () => (
  <div>
    <Divider
      bg="#ffffff"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
    />
    <Divider >
      <UpDown>
        <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="upDown" stroke width={8} color="icon_teal" left="70%" top="20%" />
        <Svg icon="triangle" width={8} color="icon_orange" left="25%" top="5%" />
        <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="hexa" width={148} color="icon_yellow" left="46%" top="10%" />
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <Svg icon="triangle" width={12} color="icon_brightest" left="90%" top="30%" />
        <Svg icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <Svg icon="triangle" hiddenMobile width={16} color="icon_teal" left="18%" top="75%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <Svg icon="hexa" width={12} color="icon_yellow" left="80%" top="70%" />
      </UpDownWide>
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <img width="450" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "absolute", right: "0%", top: "54%"}} />
      <Svg icon="hexa" width={16} color="icon_red" left="75%" top="30%" />
    </Divider>
    <Content >
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [2, 2, 3, 4],
            gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
  </div>
)

export default Projects
