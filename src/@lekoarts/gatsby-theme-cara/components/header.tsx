import * as React from "react"
import { useState, useEffect, useCallback } from "react"
/** @jsx jsx */
import { NavLink, useColorMode, Flex, Box, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Svg from "./svg"
// @ts-ignore


const Header = ({ siteTitle, menuLinks, }) => {

  const [headerbar, setNavbar] = useState(false)
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setNavbar(true)
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      setNavbar(false);
    }
    setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]); 

  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
    }
  return (
    <div style={{ display: "flex", flex: '0 1 auto', position: `sticky`, width: '100%', zIndex: 100, background: 'var(--theme-ui-colors-background)', backgroundColor: 'var(--theme-ui-colors-background)', top: headerbar ? '0px' : '-100px', transition: `all 0.3s ease-in-out`, }} className={headerbar ? "headerbar active" : "headerbar"} >
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
                  padding: `0.7rem 1rem 0.5rem`,
                  whiteSpace: `nowrap`,
                }}
                onClick={toggleColorMode}
                aria-label="Toggle dark mode"
              >
                {isDark ? [<Svg icon="day" width={6} color="heading" left="0" top="0" relativePosition />] : [<Svg icon="night" width={6} color="heading" left="0" top="0" relativePosition />]}
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
