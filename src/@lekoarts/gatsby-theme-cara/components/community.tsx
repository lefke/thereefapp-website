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
            <Svg icon="triangle" width={8} color="icon_orange" left="25%" top="5%" />
            <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
            <Svg icon="hexa" width={148} color="icon_yellow" left="46%" top="10%" />
            <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
            <Svg icon="hexa" width={12} color="icon_yellow" left="80%" top="70%" />
            <img width="350" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "absolute", right: "0%", top: "54%"}} />
        </UpDownWide>
      <Inner>
          <CommunityMDX />
            <button
                sx={{ variant: `buttons.toggle`, fontSize: `[ 2, 2, 3, 3, 3, 4]`, fontWeight: `semibold`, display: `block`, mx: `auto`, mt: 3 }}
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
