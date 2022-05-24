/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

// @ts-ignore
import TestimonialsMDX from "../components/feature-testimonials"
import FeaturedProject from "../components/feature-project"
import { withAssetPrefix, Link } from "gatsby"

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
        sx={{ justifyContent: `flex-start`, minHeight: [`25vh`, `25vh`], marginTop: '-28vh', marginBottom: '10vh' }}
    >
      <Inner>
          <div
            sx={{
            h2: { color: 'var(--theme-ui-colors-text)',},
            fontSize: '0.8rem',
            color: 'var(--theme-ui-colors-text)',
            pb: [4,5,5,6],
            }}
          >
              <TestimonialsMDX />
          </div>
            <div sx={{
              h2: { 
                textAlign: 'center',
                fontSize: [1, 2, 2, 3, 4, 4],
              },
              h3: { 
                textAlign: 'center',
                fontSize: [1, 1, 1, 2, 3, 3],
              },
            }}>
              <img width="40%" height="auto" src="/parrot-fish@2x.png"  alt="parrot fish cutout" style={{ maxWidth: "380px", zIndex: "-99", position: "relative", left: "-20%", top: "24%", margin: "40px 0 -14%"}} />
              <h2 sx={{ mt: [1,1,1,1], textAlign: 'center', fontWeight: 'bold' }}>Get fins in the water</h2>
              <h3 sx={{ mb: [4,4,4,4], fontWeight: 'bold' }}>Go on a restoration dive</h3>
              
              <div
                  sx={{
                      bg: "#ffffff",
                      mt: [3,3,3,3],
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
            <p sx={{ textAlign: `center`, mt: [3,3,3,3] }}>More projects coming soon! <Link to="/submit-project">Get your project featured here</Link></p>
      </Inner>
    </Content>
  </div>
)

export default Projects
