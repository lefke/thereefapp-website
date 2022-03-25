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
        sx={{ height: `100%`, width: `100%`, }}
        />
    <Content 
        sx={{ justifyContent: `flex-start`, minHeight: [`20vh`, `20vh`], }}
    
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
    </Content>
      <div 
        sx={{
        display: `grid`,
        gridGap: [1, 1, 2, 2],
        gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
        h2: { gridColumn: `-1/1` },
        mt: `-50px`, 
        }}
      >
        <img width="70%" height="auto" src="/indonesia_warren@2x.png"  alt="collage of sunscreen on coral crossed out" style={{ zIndex: "-99"}} />
        <img width="80%" height="auto" src="/join-the-movement@2x.png"  alt="collage of sunscreen on coral crossed out" style={{ alignSelf: "flex-end", justifySelf: "flex-end", zIndex: "-99"}} />
      </div>
  </div>
)

export default Mission
