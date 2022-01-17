import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  fonts: {
    body: 'nort, adelle-sans, aktiv-grotesk, system-ui, sans-serif',
    heading: 'nort, adelle-sans, "Avenir Next", sans-serif',
    monospace: 'nort, Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  colors: {
    primary: '#FCD901',
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.white,
    heading: '#FCD901',
    background: '#1C0248',
    divider: '#30B7D5',
    textMuted: '#FF2D1D',
    icon_brightest: 'rgba(255, 255, 255, 0.1)',
    icon_darker:  'rgba(255, 255, 255, 0.2)',
    icon_darkest:  'rgba(255, 255, 255, 0.3)',
    icon_red: '#FF2D1D',
    icon_blue: '#30B7D5',
    icon_orange: '#FF2D1D',
    icon_yellow: '#FCD901',
    icon_pink: '#fe9bba',
    icon_purple: '#30B7D5',
    icon_green: '#FCD901',
    modes: {
      light: {
        text: '#1C0248',
        heading: '#1C0248',
        primary: '#FF2D1D',
        background: '#fe9bba',
        divider: '#30B7D5',
        textMuted: '#FCD901',
        icon_pink: '#1C0248',
        icon_brightest: 'rgba(28, 2, 72, 0.1)',
        icon_darker:  'rgba(28, 2, 72, 0.2)',
        icon_darkest:  'rgba(28, 2, 72, 0.3)',
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `0em`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      letterSpacing: `0em`,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
        marginTop: '1em',
      },
    },
  },
})

export default theme
