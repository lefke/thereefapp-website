/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import SupportersMDX from "../sections/supporters"

const People = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    position: `relative`,
    marginBottom: `-1px`,
    }}
    sx={{ mt: [`-100px`] }}
  >
    <div id="section_team"></div>
    <Divider
    bg="color_divider_bg"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 100px, 100% 0, 100% 100%, 0 100%)` }}
    />
    <Content sx={{ minHeight: "70vh", pt: [`80px`, `200px`, `300px`, `300px`], pb: [`80px`, `100px`, `200px`, `200px`]}}>
      <Inner>
        <div
            sx={{
            display: `grid`,
            gridGap: [2, 2, 2, 2],
            gridTemplateColumns: [`1fr`, `repeat(2, 2fr)`, `repeat(2, 2fr)`, `repeat(3, 2fr)`, `repeat(4, 2fr)`],
            h2: { gridColumn: `-1/1`, color: `#color_divider_heading`, },
            a: { color: `color_divider_text`, 
                "&:hover": { color: 'color_divider_text'},
                },
            fontSize: '0.8rem',
            }}
        >
          <SupportersMDX />
        </div>
      </Inner>
    </Content>
      <Divider
      bg="color_divider_bg"
      sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
      />
    <Divider >
      <UpDown>
          <img width="44%" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "absolute", right: "0%", bottom: "10%", maxWidth: "360px" }} />
      </UpDown>
      <UpDownWide>
      </UpDownWide>
    </Divider>
  </div>
)

export default People
