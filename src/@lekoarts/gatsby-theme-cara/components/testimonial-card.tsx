/** @jsx jsx */
import { jsx } from "theme-ui"

type TestimonialCardProps = {
  image: string
  imageAlt: string
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const TestimonialCard = ({ image, imageAlt, link, title, children, bg }: TestimonialCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: [2, 2, 2],
      py: [2, 2, 2],
      color: `#1C0248`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `#1C0248 !important`,
        transform: `translateY(-5px)`,
      },
    }}
  >
  
    <img width="100%" height="auto" src={image} alt={imageAlt}
        sx={{
            mb: [2, 2],
            borderRadius: '50%',
        }}
    />
    <div
      sx={{
        pb: [2, 2],
        fontSize: [1, 1, 1, 1, 1, 1],
        fontWeight: `bold`,
        lineHeight: 1,
        textAlign: "center",
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, fontSize: [0, 0, 0, 0, 0, 0], lineHeight: [1, 1, 1, 1, 1, 1], }}>{children}</div>
  </a>
)

export default TestimonialCard
