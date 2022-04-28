/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner-left-content"
import Content from "../elements/content"
import { hidden, desktopHidden } from "../styles/utils"
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
      <Inner
        sx={{
          display: `grid`,
          gridGap: [1, 1, 3, 4],
          gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `3fr 1fr`, `3fr 1fr`, `3fr 1fr`],
        }}>
        <div sx={{order: '0',}}>
          <MapProjectsMDX />
          <button
              sx={{ variant: `buttons.toggle`, ml: `0`, mt: 3 }}
              onClick={null}
              type="button"
              aria-label="Toggle dark mode"
          >
              Submit your project
          </button>
        </div>
          <img width="100%" height="auto" src="/dummy-map-screen@3x.png" alt="The Reef App project map screen" sx={{ display: hidden, maxWidth: '420px', boxShadow: `lg`, right: '0', my: 4 }} />
          <img width="50%" height="auto" src="/dummy-map-screen-mobile@3x.png" alt="The Reef App project map screen" sx={{ display: desktopHidden, boxShadow: `lg`, mx: 'auto', my: 4 }} />
      </Inner>
    </Content>
    <Divider
    bg="#ffffff"
    sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
    />
  </div>
)

export default MapProjects
