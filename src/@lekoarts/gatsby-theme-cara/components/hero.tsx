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
        <img width="20%" height="auto" src="/nudibranch-cutout@2x.png" alt="nudibranch cutout" style={{position: "absolute", left: "0%", top: "12%", maxWidth: "180px" }} />
      </UpDownWide>
      <UpDown>
        <img width="35%" height="auto" src="/fish@2x.png" alt="fish floating in header" style={{position: "absolute", left: "65%", top: "55%", maxWidth: "350px" }} />
      </UpDown>
      <Inner sx={{ 
        variant: `texts.bigger`, 
        textAlign: `center`, 
        h1: { color: 'hero_heading'},
        p: {color: 'color_divider_text'},
        }}
        >
        <Intro />
      </Inner>
      <a
        sx={{ variant: `buttons.yellow`, mt: 3 }}
        href="http://thereefapp-25633844.hubspotpagebuilder.eu/the-reef-app-early-access"
        target="_blank"
        type="button"
        role="link"
        aria-label="Apply for early access"
      >
        Apply for early access
      </a>
      <p className="microCopy px-1" sx={{ variant: `texts.smaller`, color: 'color_divider_text' }}>Get early access and help shape the community.</p>
    </Content>
        <Divider
        bg="#ffffff"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `200px`, width: `100%`, clipPath: `polygon(0 0, 100% 50%, 100% 100%, 0 100%)`, zIndex: `-99`, mb: `-1px`}}
        />
  </div>
)

export default Hero
