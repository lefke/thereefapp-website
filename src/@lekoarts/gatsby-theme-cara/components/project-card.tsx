/** @jsx jsx */
import { jsx } from "theme-ui"
import { hidden, desktopHidden } from "../styles/utils"

type ProjectCardProps = {
  image: string
  imageMobile: string
  imageAlt: string
  logo: string
  description: string
  location: string
  price: string
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ image, imageMobile, logo, description, location, price, imageAlt, link, title, children, bg }: ProjectCardProps) => (
  <div
    sx={{
        display: `grid`,
        gridGap: [2, 2, 3, 4],
        gridTemplateColumns: [`1fr`, `1fr`, ` 1fr`, `2fr 3fr`, `2fr 3fr`],
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [2, 2, 2],
        py: [2, 2, 2],
        color: `#1C0248`,
      "&:hover": {
        color: `#1C0248`,
        textDecoration: `none`,
      },
      h3: { 
        gridColumn: `-1/1`,
        fontSize: [1, 2, 2, 3, 4, 4],
        lineHeight: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
      },
      ul: {
        listStyle: 'inside',
      },
      li: {
        color: `#1C0248`,
      }
    }}
  >
    <div sx={{ textAlign: 'center'}}>
      <img width="100%" height="auto" src={image} alt={imageAlt}
          sx={{
            display: hidden,
          }}
      />
      <img width="100%" height="auto" src={imageMobile} alt={imageAlt}
          sx={{
            display: desktopHidden,
          }}
      />
      <img width="120px" height="auto" src={logo}
          sx={{
            mt: '-40px',
            mx: 'auto',
          }}
      />
    </div>
    <div>
      <h3 sx={{ mt: [1,1,1,], fontWeight: 'bold' }}>Sign up for a restoration dive</h3>
      <div>
        <h4 sx={{ my: [1,1,1,], fontWeight: 'bold' }}>{title}</h4>
        <h5 sx={{ my: [1,1,1,], fontWeight: 'bold' }}>{location}</h5>
        <p sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>{description}</p>
        <p sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>What's included:</p>
        <ul sx={{ variant: 'texts.smaller', opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>
          {children}
        </ul>
        {/*<h4 sx={{ my: [1,1,1,]}}>{price}</h4>*/}
        <a
          sx={{ variant: `buttons.pink`, mt: 3, ml: 0, }}
          href="http://thereefapp-25633844.hubspotpagebuilder.eu/the-reef-app-conservation-project-interest"
          target="_blank"
          role="link"
          aria-label="Join waitlist"
        >
        Join waitlist
      </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
