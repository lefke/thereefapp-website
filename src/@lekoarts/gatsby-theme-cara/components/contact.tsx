/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const Contact = () => (
  <div>
    <Divider fill="wave">
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="60s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Divider sx={{overflow: `hidden`}} >
      <UpDown>
        <img width="30%" height="auto" src="/angel-fish@2x.png"  alt="angel fish cutout" style={{position: "absolute", left: "0%", top: "4%", maxWidth: "280px" }} />
      </UpDown>
      <UpDownWide>
        <img width="80%" height="auto" src="/lips@2x.png"  alt="lips cutout" style={{position: "absolute", right: "0%", top: "60%", maxWidth: "320px" }} />
      </UpDownWide>
    </Divider>
    <Content 
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
  </div>
)

export default Contact
