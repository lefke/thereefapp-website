/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import MissionMDX from "../sections/mission"
import { withAssetPrefix } from "gatsby"

const Mission = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    position: `relative`,
    marginBottom: `-1px`,
    }}
  >
        <Divider
        bg="#ffffff"
        sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0%, 100% 100px, 100% 100%, 0 100%)`, }}
        />
    <Content 
        sx={{ justifyContent: `flex-start`, minHeight: [`75vh`, `55vh`], }}
    
    >
      <Inner>
        <div
          sx={{
            variant: `headings.smaller`,
            zIndex: "99",
            textAlign: `center`,
            mt: [`4rem`],
          }}
        >
          <MissionMDX/>
        </div>
      </Inner>
        <img width="35%" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "relative", left: "0%", top: "54%", zIndex: "-99"}} />
        <img width="35%" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "relative", left: "0%", top: "54%", zIndex: "-99"}} />
    </Content>
  </div>
)

export default Mission
