/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import CommunityMDX from "../sections/community"
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
        bg="#ffffff"
        sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 100px, 100% 0, 100% 100%, 0 100%)` }}
        />
    <Content sx= {{ minHeight: `65vh`, mt: [`200px`] }}>
        <UpDown>
        </UpDown>
        <UpDownWide>
        </UpDownWide>
        <img width="55%" height="auto" src="/people-bubbles@2x.png"  alt="divers working on frame" style={{position: "absolute", left: "0%", top: "84%", maxWidth: "600px"}} />
      <Inner>
          <CommunityMDX />
            <button
                sx={{ variant: `buttons.toggle`, mt: 3 }}
                onClick={null}
                type="button"
                aria-label="Toggle dark mode"
            >
                Apply for early access
            </button>
            <p sx={{ variant: `p.microCopy.p`}}>Get early access and help shape the community.</p>
      </Inner>
    </Content>
        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
        />
  </div>
)

export default MapProjects
