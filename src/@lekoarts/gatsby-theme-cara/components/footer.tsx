/** @jsx jsx */
import { Box, Grid, Link, useColorMode, jsx } from "theme-ui"
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <Grid  gap={2} columns={[4]}>
        <AnchorLink to="/#section_projects">projects</AnchorLink>
        <AnchorLink to="/#section_people">people</AnchorLink>
        <AnchorLink to="/#section_team">the team</AnchorLink>
        <AnchorLink to="/#section_contact">contact</AnchorLink>
        {/*<AnchorLink to="/blog">blog</AnchorLink> */}
      </Grid>

      <button
        sx={{ variant: `buttons.toggle`, mt: 3 }}
        onClick={null}
        type="button"
        aria-label="Toggle dark mode"
      >
        Apply for early access
      </button>
      <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </Box>
  )
}

export default Footer
