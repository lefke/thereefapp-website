import * as React from "react"
/** @jsx jsx */
import { NavLink, useColorMode, Flex, Box, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Svg from "./svg"
// @ts-ignore


const Header = ({ siteTitle, menuLinks }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `dark`: `light`)
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
      <Flex
        sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
      >
        <Box
          sx={{ display: ["none", "none", "none", "none", "flex"], flexWrap: "wrap" }}
        >
          <nav 
            style={{ display: "flex" , flex: 1 }}
          >
            <ul style={{ display: "flex", flex: 1, justifyContent: 'flex-end', }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `0.6rem 0.6rem`,
                    whiteSpace: `nowrap`,
                  }}
                >
                  <NavLink 
                    href={link.link}
                  >
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
        </Box>
      </Flex>

      <Flex
        sx={{ justifyContent: "flex-end" }}
      >
        <Box
          sx={{ display: ["flex", "flex", "flex", "flex", "none"], justifyContent: "flex-end"  }}
        >
          <NavLink
            style={{
              alignItems: "center",
              padding: `0.6rem 0.6rem`,
              margin: 'auto',
            }}>
            <Svg icon="hamburger" width={8} color="heading" left="0" top="0" relativePosition />
          </NavLink>
        </Box>
      </Flex>
    </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
