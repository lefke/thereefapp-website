/** @jsx jsx */
import { jsx } from "theme-ui"
//import { ParallaxLayer } from "@react-spring/parallax"

type ContentProps = {
  children: React.ReactNode
  className?: string
}

const Content = ({ children, className = `` }: ContentProps) => (
  <div
    sx={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      minHeight: `100vh`,
    }}
    className={className}
  >
    {children}
  </div>
)

export default Content
