/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { hidden, desktopHidden } from "../styles/utils"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import TeamMDX from "../sections/team"
import { withAssetPrefix } from "gatsby"

const Team = () => (
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
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 100px, 100% 100%, 0 100%)` }}
    />
    <Content sx= {{ minHeight: `65vh`, mt: [`200px`] }}>
        <UpDown>
        </UpDown>
        <UpDownWide>
        </UpDownWide>
      <Inner
        sx={{
          display: `grid`,
          gridGap: [1, 1, 1, 1],
          gridTemplateColumns: [`1fr`, `1fr`,  `1fr`, `3fr 1fr`, `3fr 1fr`, `3fr 1fr`],
        }}
      >
          <div sx={{ maxWidth: '80%',}}><TeamMDX /></div>
          <img width="100%" height="auto" src="/UN-global-goals@3x.png" alt="UN Goals for sustainable development" sx={{ display: hidden, maxWidth: '220px', boxShadow: `lg`, }} />
          <img width="80%" height="auto" src="/UN-global-goals-horizontal@3x.png" alt="UN Goals for sustainable development" sx={{ display: desktopHidden, boxShadow: `lg`, }} />

      </Inner>
    </Content>
        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
        />
  </div>
)

export default Team
