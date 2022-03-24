/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsIntroMDX from "../sections/introProjects"
import FeatureMDX from "../sections/feature"
import { withAssetPrefix } from "gatsby"

const Projects = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    position: `relative`,
    }}
  >
        <Divider
        bg="#ffffff"
        sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 95%)` }}
        />
    <Content >
        <UpDown>
            <Svg icon="triangle" width={8} color="icon_orange" left="25%" top="5%" />
            <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
            <Svg icon="hexa" width={148} color="icon_yellow" left="46%" top="10%" />
            <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
            <Svg icon="hexa" width={12} color="icon_yellow" left="80%" top="70%" />
            <img width="450" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "absolute", right: "0%", top: "54%"}} />
        </UpDownWide>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [2, 2, 3, 4],
            gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
          }}
        >
          <ProjectsIntroMDX />
            <button
                sx={{ variant: `buttons.toggle`, fontSize: `[ 2, 2, 3, 3, 3, 4]`, fontWeight: `semibold`, display: `block`, mx: `auto`, mt: 3 }}
                onClick={null}
                type="button"
                aria-label="Toggle dark mode"
            >
                Apply for early access
            </button>
          <FeatureMDX />
        </div>
      </Inner>
    </Content>
  </div>
)

export default Projects
