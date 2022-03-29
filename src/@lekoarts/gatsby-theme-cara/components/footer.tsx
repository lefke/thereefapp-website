/** @jsx jsx */
import { Flex, useColorMode, jsx } from "theme-ui"
import Divider from "../elements/divider"
import { Link } from "gatsby"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PropTypes from "prop-types"
import Svg from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"

const Footer = ({ siteTitle, menuLinks }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Flex as="footer" variant="footer" sx={{ flexDirection: 'column', justifyContent: 'flex-end'}}>
      <Divider fill="wave" sx={{height: '40vh', width: `100%`}} >
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
      <Divider sx={{overflow: `hidden`, height: '40vh' }} >
        <UpDownWide>
          <img width="80%" height="auto" src="/lips@2x.png"  alt="lips cutout" style={{position: "absolute", right: "0%", bottom: "10%", maxWidth: "320px" }} />
        </UpDownWide>
      </Divider>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1, justifyContent: 'center' }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: 'background' }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      <button
        sx={{ variant: `buttons.toggle`, mt: 3 }}
        onClick={null}
        type="button"
        aria-label="Toggle dark mode"
      >
        Apply for early access
      </button>
      <p sx={{ mb: 5 }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </Flex>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}
Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
