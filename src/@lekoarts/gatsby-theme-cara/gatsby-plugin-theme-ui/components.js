import * as React from "react"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ image, link, title, bg, children, ...props }) => (
    <ProjectCard {...props} image={image} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default components
