import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {BlogSection} from "@/components/BlogSection/BlogSection";
import {client} from "../../../lib/api";
import treeImage from "../../../public/assets/tree1.webp"

export async function getPageBlogData() {
    const data = await client.fetchContentfulBlogPostsDataGql()
    const {blogPosts} = data;
    return {
        blogPosts: blogPosts,
    }
}

export async function generateMetadata({params}) {
    return {
        title: "Blog Page",
        description: "Blog Page Description",
        openGraph: {
            images: treeImage
        },
        'theme-color': '#000',
        alternates: {
            canonical: `${process.env.WEBSITE_URL}/blog`,
        },
    }
}

export default async function Join() {
    const {blogPosts: posts} = await getPageBlogData();
    return (
        <>
            <HeaderNav/>
            <BlogSection posts={posts}/>
            <Footer/>
        </>
    )
}