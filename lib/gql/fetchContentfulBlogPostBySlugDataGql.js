import {gql} from 'graphql-request'

export const fetchBlogPostBySlug = (slug) => {
    return gql`
    query {
      blogPostCollection(where: {slug: "${slug}"}, limit: 1) {
        items {
          title
          body {
            json
          }
          slug
          sys {
            publishedAt
            firstPublishedAt
          }
          metaDescription
          metaTitle
          excerpt
          image {
            url
            title
          }
        }
      }
    }
`
}
