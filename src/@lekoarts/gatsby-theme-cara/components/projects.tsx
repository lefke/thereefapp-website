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
    marginBottom: `-1px`,
    }}
  >
    <div id="section_projects"></div>
    <Divider
    bg="#ffffff"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 100%)` }}
    />
    <Content
        sx={{ justifyContent: `flex-start`, minHeight: [`25vh`, `25vh`], }}
    >
      <Inner>
          <ProjectsIntroMDX />
            <button
                sx={{ variant: `buttons.toggle`, mt: 3 }}
                onClick={null}
                type="button"
                aria-label="Toggle dark mode"
            >
                Apply for early access
            </button>
            <div>
                <img width="40%" height="auto" src="/parrot-fish@2x.png"  alt="parrot fish cutout" style={{ maxWidth: "380px", zIndex: "-99", position: "relative", left: "-20%", top: "14%", margin: "30px 0 -10%"}} />
                <div
                    sx={{
                        bg: "#ffffff",
                        py: [1,1,1,1],
                        px: [3,3,3,3],
                        borderRadius: "lg",
                        boxShadow: `lg`,
                    }}
                >
                    <h3>Featured projects</h3>
                    <FeaturedProject />
                </div>
            </div>
            <p sx={{ textAlign: `center` }}>Get your project featured</p>
      </Inner>
    </Content>
  </div>
)

export default Projects
