import { gql } from 'graphql-request'


export const FETCH_ALL_BLOG_POSTS = gql`
    query {
        blogPostCollection {
            items {
                title
                slug
                sys {
                    publishedAt
                    firstPublishedAt
                }
                excerpt
                metaTitle
                metaDescription
                image {
                    url
                    title
                }
            }
        }
    }
`
