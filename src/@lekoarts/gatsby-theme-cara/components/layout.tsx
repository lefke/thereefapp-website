import * as React from "react"
import { get, jsx } from "theme-ui"
import { Global } from "@emotion/react"
import SEO from "./seo"
import Header from "./header"
import { graphql, StaticQuery } from "gatsby"


type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <SEO />
    <Header  menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
    <main className={className}>{children}</main>
  </React.Fragment>
    )}
  />
)


export default Layout
