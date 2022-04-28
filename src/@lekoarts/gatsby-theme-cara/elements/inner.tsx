/** @jsx jsx */
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `3/4`, `2/3`], textAlign: `left`, display:`block`, 
      padding: [2, 3, 3, 4], }} className={className}>
    {children}
  </div>
)

export default Inner
