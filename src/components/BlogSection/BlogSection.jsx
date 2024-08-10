import Link from "next/link";
import { formatDate } from "../../../utils/formatDate";

export const BlogSection = ({posts}) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1
                className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our
                Blog</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here
                at 1 Tree Emergency we focus on providing swift, professional, and dependable tree
                removal services around the clock, ensuring your safety and peace of mind in every
                emergency situation.</p>
              {/*<div*/}
              {/*    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">*/}
              {/*    <a href="#"*/}
              {/*       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">*/}
              {/*        Learn more*/}
              {/*        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
              {/*             xmlns="http://www.w3.org/2000/svg">*/}
              {/*            <path fillRule="evenodd"*/}
              {/*                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
              {/*                  clipRule="evenodd"></path>*/}
              {/*        </svg>*/}
              {/*    </a>*/}
              {/*    <a href="#"*/}
              {/*       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
              {/*        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
              {/*             xmlns="http://www.w3.org/2000/svg">*/}
              {/*            <path*/}
              {/*                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>*/}
              {/*        </svg>*/}
              {/*        Watch video*/}
              {/*    </a>*/}
              {/*</div>*/}
            </div>
          </section>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              return (
                <Link href={`/blog/${post.slug}`} key={post?.title}>
                  <article
                    className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <img className="mb-5 rounded-lg"
                         src={post.image.url}
                         alt={post.image.title}/>
                    <span
                      className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Article</span>
                    <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-4">
                      <div className="font-medium dark:text-white">
                        <div
                          className="text-sm font-normal text-gray-500 dark:text-gray-400">{formatDate(post.sys.firstPublishedAt)}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}