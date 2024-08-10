import {gql} from 'graphql-request'

export const FETCH_LATEST_BLOG_POSTS = gql`
    query {
      blogPostCollection(
        limit: 4
      ) {
        items {
          title
          slug
          sys {
            publishedAt
            firstPublishedAt
          }
          excerpt
          image {
            url
            title
          }
        }
      }
    }
`
