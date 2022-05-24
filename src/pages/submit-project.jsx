import * as React from "react"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Divider from "../@lekoarts/gatsby-theme-cara/elements/divider"
import { UpDown, UpDownWide } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import Svg from "../@lekoarts/gatsby-theme-cara/components/svg"
import Seo from "../@lekoarts/gatsby-theme-cara/components/seo"
import Content from "../@lekoarts/gatsby-theme-cara/elements/content"
import Inner from "../@lekoarts/gatsby-theme-cara/elements/inner"
import SimpleMap from "../@lekoarts/gatsby-theme-cara/components/map-embed"

const SubmitProject = () => (
  <Layout>
    <Seo title="Submit a project" />
    <div>
      <Divider>
        <UpDown>
          <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
          <Svg icon="hexa" width={48} fill color="icon_yellow" left="60%" top="70%" />
          <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          <Svg icon="circle" width={64} hiddenMobile color="icon_red" left="95%" top="5%" />
          <Svg icon="upDown" stroke hiddenMobile width={8} color="icon_darkest" left="95%" top="90%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
          <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
          <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
          <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
          <Svg icon="upDown" stroke hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
        <Svg icon="upDown" stroke hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
        <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
        <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
        <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
      </Divider>
      <Content sx={{ variant: `texts.bigger` }} >
        <Inner>
        <SimpleMap zoom={4} center={{ lat: 14.569598294797048, lng: -75.55183377214301,}} width={'100%'} height={'50vh'} />
          <iframe title="Submit a project to be added to the map" class="airtable-embed" src="https://airtable.com/embed/shrj3MleacnIqf3hS?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="1790" style={{background: 'transparent', border: '1px solid #ccc', marginTop: '20px', borderRadius: '20px'}}></iframe>
        </Inner>
      </Content>
    </div>
  </Layout>
)

export default SubmitProject
