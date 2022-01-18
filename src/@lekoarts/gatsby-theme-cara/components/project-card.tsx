/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  image: string
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ image, link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [3, 4],
      color: `#1C0248`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `#1C0248 !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
  
    <img width="100%" height="auto" src={image} 
        sx={{
            mb: 3,
        }}
    />
    <div
      sx={{
        pb: 3,
        fontSize: [3, 4],
        fontWeight: `bold`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85 }}>{children}</div>
  </a>
)

export default ProjectCard
