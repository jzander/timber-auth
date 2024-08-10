import {fetchBlogPostBySlug} from "./gql/fetchContentfulBlogPostBySlugDataGql";
import {FETCH_ALL_BLOG_POSTS} from "./gql/fetchContentfulBlogPostsDataGql";
import {FETCH_LATEST_BLOG_POSTS} from "./gql/fetchContentfulLatestBlogPostsDataGql";
import {processGraphQLBlogPostResponse} from "./utils/processGraphQLBlogPostResponse";
import {processGraphQLBlogDataResponse} from "./utils/processGraphQLBlogDataResponse";
import {processGraphQLLatestBlogDataResponse} from "./utils/processGraphQLLatestBlogDataResponse";

const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

async function apiCall(query, variables) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({query, variables}),
    }
    return await fetch(fetchUrl, options)
}

async function fetchContentfulBlogPostBySlugDataGql(slug) {
    const response = await apiCall(fetchBlogPostBySlug(slug));
    const {data} = await response.json()
    return processGraphQLBlogPostResponse(data)
}

async function fetchContentfulBlogPostsDataGql() {
    const response = await apiCall(FETCH_ALL_BLOG_POSTS);
    const {data} = await response.json()
    return processGraphQLBlogDataResponse(data)
}

async function fetchContentfulLatestBlogPostsDataGql() {
    const response = await apiCall(FETCH_LATEST_BLOG_POSTS);
    const {data} = await response.json()
    return processGraphQLLatestBlogDataResponse(data)
}

export const client = {
    fetchContentfulBlogPostsDataGql,
    fetchContentfulLatestBlogPostsDataGql,
    fetchContentfulBlogPostBySlugDataGql
}