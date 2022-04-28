/** @jsx jsx */
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const InnerLeft = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `full`], textAlign: `left`, display:`block`, pl: [2, 3, 3, 0], pr: [2, 3, 3, 6] }} className={className}>
    {children}
  </div>
)

export default InnerLeft
