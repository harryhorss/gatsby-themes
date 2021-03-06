import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      title: string
      titleAlt: string
      siteUrl: string
      description: string
      headline: string
      language: string
      image: string
      author: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          titleAlt
          siteUrl
          description
          headline
          language
          image
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
