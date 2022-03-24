import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  main: {
    overflowY: `hidden`,
  },
  fonts: {
    body: 'nort, system-ui, sans-serif',
    heading: 'nort, "Avenir Next", sans-serif',
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
    divider: '#1C0248',
    wave: '#ffffff',
    textMuted: '#FF2D1D',
    icon_brightest: 'rgba(255, 255, 255, 0.04)',
    icon_darker:  'rgba(255, 255, 255, 0.08)',
    icon_darkest:  'rgba(255, 255, 255, 0.16)',
    icon_red: '#FF2D1D',
    icon_blue: '#30B7D5',
    icon_orange: '#FF2D1D',
    icon_yellow: '#FCD901',
    icon_pink: '#FFA4CA',
    icon_purple: '#30B7D5',
    icon_green: '#FCD901',
    modes: {
      light: {
        text: '#1C0248',
        heading: '#1C0248',
        primary: '#FF2D1D',
        background: '#FFA4CA',
        divider: '#ffffff',
        wave: '#ffffff',
        textMuted: '#FCD901',
        icon_pink: '#1C0248',
        icon_brightest: 'rgba(28, 2, 72, 0.04)',
        icon_darker:  'rgba(28, 2, 72, 0.08)',
        icon_darkest:  'rgba(28, 2, 72, 0.16)',
      },
    },
  },
  breakpoints: [ '321px',`376px`, `668px`, `900px`, `1200px`, `1600px`],
  footer: {
    fontSize: [0, 0, 1],
    textAlign: `center`,
    color: `textMuted`,
    px: [2, 3],
    pt: [4, 5],
    pb: [0, 0],
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
      fontSize: [0, 0, 1, 1, 2, 2],
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    li: {
      fontSize: [0, 0, 1, 1, 2, 2],
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [0, 1, 2, 3],
        fontWeight: `normal`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [4, 5, 5, 6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `0em`,
      color: `heading`,
      textAlign: `center !important`,
    },
    h2: {
      fontSize: [3, 4, 4, 5, 6, 6],
      mt: 2,
      mb: 2,
      letterSpacing: `0em`,
      color: `heading`,
    },
    h3: {
      fontSize: [2, 3, 3, 4, 5, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [1, 2, 2, 3, 4, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [0, 1, 1, 2, 3, 3],
      color: `heading`,
    },
    h6: {
      fontSize: [0, 1],
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
      fontSize: [1, 1, 2],
      textTransform: 'uppercase',
      borderRadius: '40px',
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
        fontSize: [ 1, 1, 2, 2, 3, 4],
        marginTop: '1',
        lineHeight: '1.2em',
      },
    },
    smaller: {
        p: {
        fontSize: [ 0, 0, 1, 1, 2, 3],
        marginTop: '1',
        lineHeight: '1em',
        },
    },
  },
  headings: {
    smaller: {
        h1: {
            fontSize: [1, 2, 2, 3, 4, 4],
        },
        h2: {
            fontSize: [1, 2, 2, 3, 4, 4],
        },
    },
  },
})

export default theme
