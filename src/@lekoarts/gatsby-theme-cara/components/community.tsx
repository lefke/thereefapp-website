/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner-right-content"
import Content from "../elements/content"
import { hidden, desktopHidden } from "../styles/utils"
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
    <div id="section_people"></div>
    <Divider
    bg="#ffffff"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 100px, 100% 0, 100% 100%, 0 100%)` }}
    />
    <Content sx= {{ minHeight: `65vh`, mt: [`200px`] }}>
        <UpDown>
        </UpDown>
        <UpDownWide>
        </UpDownWide>
      <Inner
        sx={{
          display: `grid`,
          gridGap: [1, 1, 3, 4],
          gridTemplateColumns: [`1fr`, `1fr`,  `1fr`, `1fr 3fr`, `1fr 3fr`, `1fr 3fr`],
        }}>
       {/*   <img width="100%" height="auto" src="/dummy-restoration-profile@3x.png" alt="The Reef App restoration profile screen" sx={{ display: hidden, maxWidth: '400px', boxShadow: `lg`, left: '0', my: 4 }} />
          <img width="50%" height="auto" src="/dummy-restoration-profile-mobile@3x.png" alt="The Reef App restoration profile screen" sx={{ display: desktopHidden, boxShadow: `lg`, mx: 'auto', my: 4 }} />
      */} 
          <div></div>
          <div sx={{order: [-1, -1, -1, 0,0], pr:[0,0,0,0,0,6] }}>
            <CommunityMDX />
            <a
                sx={{ variant: `buttons.yellow`, ml: `0`, mt: 3 }}
                href="http://thereefapp-25633844.hubspotpagebuilder.eu/the-reef-app-early-access"
                target="_blank"
                role="link"
                aria-label="Apply for early access"
            >
                Apply for early access
            </a>
            <p sx={{ variant: `p.microCopy.p`}}>Get early access and help shape the community.</p>
          </div>
      </Inner>

    </Content>
              <img width="55%" height="auto" src="/people-bubbles@2x.png"  alt="divers working on frame" style={{position: "relative", maxWidth: "500px", marginTop: "20px", }} />
        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
        />
  </div>
)

export default MapProjects
