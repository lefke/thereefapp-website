/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsIntroMDX from "../sections/introProjects"
import FeaturedProject from "../components/feature-project"
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
        sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 100%)` }}
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
          <ProjectsIntroMDX />
            <button
                sx={{ variant: `buttons.toggle`, fontSize: `[ 2, 2, 3, 3, 3, 4]`, fontWeight: `semibold`, display: `block`, mx: `auto`, mt: 3 }}
                onClick={null}
                type="button"
                aria-label="Toggle dark mode"
            >
                Apply for early access
            </button>
            <h3>Featured project</h3>
          <FeaturedProject />
            <p sx={{ textAlign: `center` }}>Get your project featured</p>
      </Inner>
    </Content>

        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 0, 100% 100%, 100% 100%)` }}
        />
  </div>
)

export default Projects
