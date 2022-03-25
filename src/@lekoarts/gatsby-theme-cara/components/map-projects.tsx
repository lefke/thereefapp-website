/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import MapProjectsMDX from "../sections/mapProjects"
import { withAssetPrefix } from "gatsby"

const MapProjects = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    position: `relative`,
    }}
    sx={{ mt: [`-100px`] }}
  >
    <Divider
    bg="icon_yellow"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 100px, 100% 100%, 0 100%)` }}
    />
    <Content sx={{ minHeight: "70vh", mt: [`100px`, `200px`, `300px`, `300px`] }}>
        <img width="60%" height="auto" src="/platform-project@2x.png" alt="coral restoration underwater platform" style={{marginTop: '-70px', position: "absolute", left: "10%", top: "0%", maxWidth: "700px" }} />
        <UpDownWide>
            <img width="350" height="auto" src="/shoal-collage@2x.png"  alt="collage of shoal of fish" style={{position: "absolute", right: "0%", top: "54%"}} />        </UpDownWide>
      <Inner>
          <MapProjectsMDX />
            <button
                sx={{ variant: `buttons.toggle`, mt: 3 }}
                onClick={null}
                type="button"
                aria-label="Toggle dark mode"
            >
                Submit your project
            </button>
      </Inner>
    </Content>
    <Divider
    bg="#ffffff"
    sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
    />
  </div>
)

export default MapProjects
