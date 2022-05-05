import * as React from "react"
import {  useEffect, useRef, useState, useCallback } from "react"
import { Menu, Transition } from '@headlessui/react'
/** @jsx jsx */
import { NavLink, useColorMode, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Svg from "./svg"
// @ts-ignore


const Header = ({ siteTitle, menuLinks, }) => {

  const [scrollDir, setScrollDir] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY;
    let ticking = false;
    // Check for the window element. 
    // Needed for server size rendering of Gatsby else use of window.innerHeight/Width will cause build failures.
    if (typeof window !== `undefined`) {
      lastScrollY = window.pageYOffset
    }
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);


  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
    }
  return (
    <div style={{ display: "flex", flex: '0 1 auto', flexDirection: 'row', justifyContent: 'space-between', position: `sticky`, width: '100%', zIndex: 100, background: 'var(--theme-ui-colors-background)', backgroundColor: 'var(--theme-ui-colors-background)', top: scrollDir ? '0px' : '-100px', transition: `all 0.6s ease-in-out 0.3s`, }} className={scrollDir ? "headerbar active" : "headerbar"}>
      <NavLink
        href={'/'}
        style={{ display: 'flex', alignSelf: 'flex-start' }}
        sx={{ m: 3 }}
      >
        {isDark ? (
        <img width="auto" height="50px" style={{ maxHeight: "50px" }} src="/Logo lockup - coral@2x.png" alt="The Reef App Logo" />
        ) : (
        <img width="auto" height="50px" style={{ maxHeight: "50px" }} src="/Logo lockup - night@2x.png" alt="The Reef App Logo" />
        )}
      </NavLink>
        <nav className="flex-1, justify-end flex-wrap hidden md:inline-flex items-center" >
        <ul  className="flex-1, justify-end inline-flex " >
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
              {isDark ? [<Svg icon="day" width={6} color="icon_yellow" right="" left="0" top="0" relativePosition />] : [<Svg icon="night" width={6} color="heading"  right="" left="0" top="0" relativePosition />]}
            </li>
          </ul>
        </nav>

      <Menu>
            {({ open }) => (
          <>
        <Menu.Button className={`absolute right-2 top-2 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 md:hidden text-right`}>
          
            {open ? [<Svg icon="close" width={8} color="wave" left="" right="0" top="1" relativePosition />] : [<Svg icon="hamburger" width={8} color="wave"  right="" left="0" top="2" relativePosition />]}
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-2 top-20 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none p-1 border-0 dark:bg-background">
            {menuLinks.map(link => (
              <Menu.Item>
                {({ active }) => (
                  <a
                      className={`${
                        active ? 'hover:bg-opacity-70' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 my-1 text-sm bg-wave text-secondary`}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              <a
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              className={` hover:bg-icon_pink group flex w-full items-center px-2 py-2 my-1 text-sm bg-wave text-secondary`}
            >
              {isDark ? [<Svg icon="day" width={6} color="icon_yellow" left="0" right="" top="0" relativePosition />] : [<Svg icon="night" width={6} color="heading" left="0" right="" top="0" relativePosition />]}
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
        </>
            )}
      </Menu>
    </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
