/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = () => (
  <div id="home">
      <Content sx={{ minHeight: `90vh`, textAlign: `center` }} >
      <UpDownWide>
        <img width="20%" height="auto" src="/nudibranch-cutout@2x.png" alt="nudibranch cutout" style={{position: "absolute", left: "0%", top: "6%", maxWidth: "180px" }} />
      </UpDownWide>
      <UpDown>
        <img width="35%" height="auto" src="/fish@2x.png" alt="fish floating in header" style={{position: "absolute", left: "65%", top: "55%", maxWidth: "350px" }} />
      </UpDown>
      <Inner sx={{ variant: `texts.bigger`, textAlign: `center` }}>
        <Intro />
      </Inner>
      <button
        sx={{ variant: `buttons.yellow`, mt: 3 }}
        onClick={null}
        type="button"
        aria-label="Toggle dark mode"
      >
        Apply for early access
      </button>
      <p className="microCopy" sx={{ variant: `texts.smaller`}}>Get early access and help shape the community.</p>
    </Content>
        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `200px`, width: `100%`, clipPath: `polygon(0 0, 100% 50%, 100% 100%, 0 100%)`, zIndex: `-99`, mb: `-1px`}}
        />
  </div>
)

export default Hero
