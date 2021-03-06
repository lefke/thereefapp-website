/** @jsx jsx */
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

type TestimonialCardProps = {
  hiddenMobile?: boolean
  image: string
  imageAlt: string
  link: string
  title: string
  subtitle: string
  children: React.ReactNode
  bg: string
}

const TestimonialCard = ({ image, imageAlt, link, title, subtitle, children, bg, hiddenMobile=false }: TestimonialCardProps) => (
  <div
    sx={{
      display: hiddenMobile ? hidden : `block`,
      width: `100%`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: [2, 2, 2],
      py: [2, 2, 2],
      color: `#1C0248`,
      textAlign: 'center',
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        transform: `translateY(-5px)`,
      textDecoration: `none`,
      },
    }}
  >
  
    <img width="74%" height="auto" src={image} alt={imageAlt}
        sx={{
            mx: 'auto',
            mb: [2, 2],
            borderRadius: '50%',
        }}
    />
    <div
      sx={{
        pb: [1, 1],
        fontSize: [1, 1, 1, 1, 1, 1],
        fontWeight: `bold`,
        lineHeight: 1,
        textAlign: "center",
      }}
    >
      {title}
    </div>
    <div
      sx={{
        pb: [1, 1],
        fontSize: [1, 1, 1, 1, 1, 1],
        fontWeight: `bold`,
        lineHeight: 1,
        textAlign: "center",
      }}
    >
      {subtitle}
    </div>
    <div sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], lineHeight: [1, 1, 1, 1, 1, 1], }}>{children}</div>
  </div>
)

export default TestimonialCard
