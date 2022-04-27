import * as React from "react"
import ProjectCard from "../components/project-card"
import TestimonialCard from "../components/testimonial-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ imageAlt, image, logo, link, title, bg, children, ...props }) => (
    <ProjectCard {...props} imageAlt= {imageAlt} image={image} logo={logo} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  TestimonialCard: ({ imageAlt, image, link, title, bg, children, ...props }) => (
    <TestimonialCard {...props} imageAlt= {imageAlt} image={image} link={link} title={title} bg={bg}>
      {children}
    </TestimonialCard>
  ),
}

export default components
