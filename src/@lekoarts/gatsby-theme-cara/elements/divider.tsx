/** @jsx jsx */
import { jsx } from "theme-ui"
//import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
}

const Divider = ({
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <div
    sx={{
      position: `absolute`,
      width: `full`,
      height: `auto`,
      minHeight: `100vh`,
      background: bg,
      backgroundColor: bg,
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
