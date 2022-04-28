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
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
        display: `grid`,
        gridGap: [2, 2, 3, 4],
        gridTemplateColumns: [`1fr`, `1fr`, ` 1fr`, `2fr 3fr`, `2fr 3fr`],
        h2: { gridColumn: `-1/1` },
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [2, 2, 2],
        py: [2, 2, 2],
        color: `#1C0248`,
      "&:hover": {
        color: `#1C0248 !important`,
      },
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
      <h4 sx={{ mt: [1,1,1,]}}>Join the global movement to save coral reefs. Sign up for a restoration dive.</h4>
      <div>
        <h4 sx={{ my: [1,1,1,]}}>{title}</h4>
        <h5 sx={{ my: [1,1,1,]}}>{location}</h5>
        <p sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>{description}</p>
        <p sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>What's included:</p>
        <ul sx={{ variant: 'texts.smaller', opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], fontWeight: `normal`,}}>
          {children}
        </ul>
        <h4 sx={{ my: [1,1,1,]}}>{price}</h4>
        <button
          sx={{ variant: `buttons.toggle`, mt: 3, ml: 0, }}
          onClick={null}
          type="button"
          aria-label="Toggle dark mode"
        >
        Join waitlist
      </button>
      </div>
    </div>
  </a>
)

export default ProjectCard
