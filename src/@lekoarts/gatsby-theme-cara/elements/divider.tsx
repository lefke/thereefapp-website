/** @jsx jsx */
import { jsx } from "theme-ui"
//import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  children?: React.ReactNode
  bg?: string
  bgImage?: string
  fill?: string
  clipPath?: string
  className?: string
}

const Divider = ({
  bg = ``,
  bgImage = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <div
    sx={{
      position: `absolute`,
      alignSelf: `stretch`,
      width: `100%`,
      height: `100%`,
      background: bg,
      backgroundColor: bg,
      backgroundImage: bgImage,
      zIndex: `-99`,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    }}
    className={className}
  >
    {children}
  </div>
)

export default Divider
