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
            <div>
                <img width="40%" height="auto" src="/parrot-fish@2x.png"  alt="collage of sunscreen on coral crossed out" style={{ maxWidth: "400px", zIndex: "-99", position: "relative", left: "-10%", top: "14%", margin: "30px 0 -85px"}} />
                <div
                    sx={{
                        bg: "#ffffff",
                        py: [1,1,1,1],
                        px: [3,3,3,3],
                        borderRadius: "lg",
                        boxShadow: `lg`,
                    }}
                >
                    <h3>Featured project</h3>
                    <FeaturedProject />
                </div>
            </div>
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
