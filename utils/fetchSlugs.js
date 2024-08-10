import client from "./contentfulClient";

async function fetchSlugs() {
  const contentTypes = [
    {content_type: 'blogPost'},
  ];

  const requests = contentTypes.map((params) => client.getEntries(params));

  try {
    const [
      blogPosts
    ] = await Promise.all(requests);


    const blogSlugs = blogPosts.items.map((post) => {
      if (post?.fields?.slug) {
        return {
          slug: `blog/${post.fields.slug}`,
          lastmod: post.sys.updatedAt,
          priority: .7
        }
      }
      return null
    })

    return [
      ...blogSlugs
    ];
  } catch (error) {
    console.error("Failed to fetch data from Contentful:", error);
    throw error; // or handle error as needed
  }
}

export default fetchSlugs