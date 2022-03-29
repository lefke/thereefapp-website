import { graphql, useStaticQuery } from "gatsby"

type UseMenuLinksProps = {
  site: {
    siteMetadata: {
      siteTitle
      menuLinks: {
        name
        link
      }
    }
  }
}

const useMenuLinks = () => {
  const data = useStaticQuery<UseMenuLinksProps>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.menuLinks
}

export default useMenuLinks
