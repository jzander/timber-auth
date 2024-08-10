export function processGraphQLBlogDataResponse(data) {
    return {
        blogPosts: data['blogPostCollection'].items,
    }
}
