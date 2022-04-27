/** @jsx jsx */
import { jsx } from "theme-ui"
// @ts-ignore
import TestimonialsMDX from "../sections/testimonials"

const Testimonials = () => (
    <div
        sx={{
        display: `grid`,
        gridGap: [1, 1, 1, 1],
        gridTemplateColumns: [`1fr`, `1fr`,  `repeat(4, 2fr)`, `repeat(4, 2fr)`],
        h2: { gridColumn: `-1/1` },
        fontSize: '0.8rem',
        }}
    >
        <TestimonialsMDX />
    </div>
)

export default Testimonials
