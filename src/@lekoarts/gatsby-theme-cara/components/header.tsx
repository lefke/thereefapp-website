import * as React from "react"
/** @jsx jsx */
import { NavLink, useColorMode, jsx } from "theme-ui"
import { hidden } from "../styles/utils"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// @ts-ignore


const Header = ({ siteTitle, menuLinks }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
    }
  return (
    <div style={{ display: "flex", flex: '0 1 auto', position: `sticky`, top: 0, zIndex: 100, }}>
      <NavLink
        href={'/'}
        style={{ display: 'flex', alignSelf: 'flex-start' }}
        sx={{ m: 3 }}
      
      >
        {isDark ? (
        <img width="auto" height="50px" src="/Logo lockup - coral@2x.png" alt="The Reef App Logo" />
        ) : (
        <img width="auto" height="50px" src="/Logo lockup - night@2x.png" alt="The Reef App Logo" />
        )}
      </NavLink>
      <nav style={{ display: "flex", flex: 1 }}>
        <ul style={{ display: "flex", flex: 1, justifyContent: 'flex-end', }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `0.6rem 1rem`,
                whiteSpace: `nowrap`,
              }}
            >
              <NavLink style={{  }} href={link.link}>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li
            style={{
              listStyleType: `none`,
              padding: `0.6rem 1rem`,
              whiteSpace: `nowrap`,
            }}
            onClick={toggleColorMode}
            aria-label="Toggle dark mode"
          >
            {isDark ? `reef dive` : `night dive`}
          </li>
        </ul>
      </nav>
      {/*<button aria-label="Mobile Menu Toggle" aria-expanded="false" aria-pressed="false" aria-haspopup="true" ><svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></button>*/}
    </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
