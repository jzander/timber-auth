import pkg from 'lodash';

const {omit} = pkg;

export function processGraphQLResponse(data) {
    return {
        blogPosts: data?.['blogPostCollection'] ? data['blogPostCollection'].items : []
    }
}
