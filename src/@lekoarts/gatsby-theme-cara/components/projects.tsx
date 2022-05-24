/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

// @ts-ignore
import TestimonialsMDX from "../components/feature-testimonials"
import FeaturedProject from "../components/feature-project"
import { withAssetPrefix } from "gatsby"

const Projects = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    position: `relative`,
    marginBottom: `-1px`,
    color: `#1C0248`,
    }}
  >
    <div id="section_projects"></div>
    <Divider
    bg="#ffffff"
    sx={{ height: `100%`, width: `100%`, clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 100%)` }}
    />
    <Content
        sx={{ justifyContent: `flex-start`, minHeight: [`25vh`, `25vh`], marginTop: '-34vh' }}
    >
      <Inner>
          <div
            sx={{
            h2: { color: 'var(--theme-ui-colors-text)',},
            fontSize: '0.8rem',
            color: 'var(--theme-ui-colors-text)',
            }}
          >
              <TestimonialsMDX />
          </div>
            <div>
                <img width="40%" height="auto" src="/parrot-fish@2x.png"  alt="parrot fish cutout" style={{ maxWidth: "380px", zIndex: "-99", position: "relative", left: "-20%", top: "14%", margin: "30px 0 -10%"}} />
                
                <div
                    sx={{
                        bg: "#ffffff",
                        py: [3,3,3,3],
                        px: [3,3,3,3],
                        borderRadius: "lg",
                        boxShadow: `lg`,
                        li: {color: `secondary`,},
                    }}
                >
                    <FeaturedProject />
                </div>
            </div>
            <p sx={{ textAlign: `center` }}>More projects coming soon! <a href="http://thereefapp-25633844.hubspotpagebuilder.eu/the-reef-app-submit-project" target="_blank">Get your project featured here</a></p>
      </Inner>
    </Content>
  </div>
)

export default Projects
