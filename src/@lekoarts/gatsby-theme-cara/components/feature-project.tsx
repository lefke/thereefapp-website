/** @jsx jsx */
import { jsx } from "theme-ui"
// @ts-ignore
import FeatureMDX from "../sections/feature"

const FeaturedProject = () => (
    <div
        sx={{
        display: `grid`,
        gridGap: [2, 2, 3, 4],
        gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`],
        h2: { gridColumn: `-1/1` },
        }}
    >
        <FeatureMDX />
    </div>
)

export default FeaturedProject
