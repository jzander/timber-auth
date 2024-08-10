import {BlogPost} from "@/components/BlogPost/BlogPost";
import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import styles from "../../typography.css"
import Head from "next/head";
import {client} from "../../../../lib/api";

export async function getBlogPostData(slug) {
    const [blogPost, latestPosts] = await Promise.all([
        client.fetchContentfulBlogPostBySlugDataGql(slug),
        client.fetchContentfulLatestBlogPostsDataGql()
    ]);
    return {
        blogPost,
        latestPosts,
        WEBSITE: process.env.WEBSITE_URL,
    };
}

export async function generateMetadata({params}) {
    const {blogPost, WEBSITE} = await getBlogPostData(params.blogPost);
    const {metaDescription, metaTitle, image} = blogPost;
    return {
        title: metaTitle,
        description: metaDescription,
        openGraph: {
            images: image?.url
        },
        'theme-color': '#000',
        alternates: {
            canonical: `${WEBSITE}/blog/${params.blogPost}`,
        },
    }
}

export default async function BlogPostContainer({params}) {
    const {blogPost, latestPosts} = await getBlogPostData(params.blogPost);
    return (
        <>
            <Head>
                <link href={styles} rel="stylesheet"/>
            </Head>
            <HeaderNav/>
            <BlogPost post={blogPost} latestPosts={latestPosts}/>
            <Footer/>
        </>
    );
}