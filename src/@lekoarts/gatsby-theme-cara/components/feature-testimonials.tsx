/** @jsx jsx */
import { jsx } from "theme-ui"
// @ts-ignore
import TestimonialsMDX from "../sections/testimonials"

const Testimonials = () => (
    <div
        sx={{
        display: `grid`,
        gridGap: [2, 2, 2, 2],
        gridTemplateColumns: [`1fr`, `repeat(2, 2fr)`, `repeat(2, 2fr)`, `repeat(4, 2fr)`, `repeat(4, 2fr)`],
        a: { color: `text`, 
            "&:hover": { color: 'text'},
            },
        }}
    >
        <TestimonialsMDX />
    </div>
)

export default Testimonials
