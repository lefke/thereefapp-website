/** @jsx jsx */
import { Flex, useColorMode, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Contact = () => {

  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? 'light' : `dark` )
    }

  return (

  <div id="section_contact">
    <Divider sx={{overflow: `hidden`}} >
      <UpDown>
        <img width="40%" height="auto" src="/angel-fish@2x.png"  alt="angel fish cutout" style={{position: "absolute", left: "0%", top: "4%", maxWidth: "260px" }} />
      </UpDown>
    </Divider>
    <Content 
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: `center`,
          }}>
      <Inner
          sx={{
            display: `flex`,
            width: `100%`,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: `center`,
            mb: `100px`,
            h2:{ color: `color_divider_heading`,},
            color: 'color_divider_text',
            p:{ color: `color_divider_text`,},
            }}
          >
        <ContactMDX />
        <Flex
            sx={{
            justifyContent: `center`,
            alignItems: `center`,
            mt: 3,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            }}
        >
            {isDark ? (
            <img width="50%" height="auto" src="/The reef app long logo - yellow-darktheme@2x.png" alt="The Reef App Logo" />
            ) : (
            <img width="50%" height="auto" src="/The reef app long logo - yellow@2x.png" alt="The Reef App Logo" />
            )}
      </Flex>

      <button
        sx={{ variant: `buttons.toggle`, mt: 4 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `reef dive` : `night dive` }
      </button>
      </Inner>
    </Content>

  </div>
)
}

export default Contact
