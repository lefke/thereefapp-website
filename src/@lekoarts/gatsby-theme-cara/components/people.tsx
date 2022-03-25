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
import AdvisorsMDX from "../sections/advisors"

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
    <Divider
    bg="icon_yellow"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 100px, 100% 0, 100% 100%, 0 100%)` }}
    />
    <Divider >
      <UpDown>
      </UpDown>
      <UpDownWide>
      </UpDownWide>
      <Svg icon="hexa" width={8} color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content sx={{ minHeight: "70vh", pt: [`100px`, `200px`, `300px`, `300px`]}}>
      <Inner>
        <SupportersMDX />
        <AdvisorsMDX />
      </Inner>
    </Content>
        <img width="80%" height="auto" src="/no-lotion.png"  alt="collage of sunscreen on coral crossed out" style={{position: "absolute", right: "0%", top: "24%", maxWidth: "320px" }} />
        <Divider
        bg="icon_yellow"
        sx={{ position: `initial`, justifySelf: `flex-end`, height: `100px`, width: `100%`, clipPath: `polygon(0 100%, 100% 0%, 100% 100%)` }}
        />
  </div>
)

export default People
