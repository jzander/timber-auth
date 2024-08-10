"use client"
import {formatDate} from "../../../utils/formatDate";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {RichTextOptions} from "../RichTextSection/RichTextSection";
import Link from "next/link";
import {NewsletterSignup} from "@/components/NewsletterSignup/NewsletterSignup";
import {Bounce, toast} from "react-toastify";
import {BsSendFill} from "react-icons/bs";
import useCurrentUrl from "@/hooks/useCurrentUrl";


export const BlogPost = ({post, latestPosts}) => {
    const WEBSITE = process.env.WEBSITE_URL;
    const currentUrl = useCurrentUrl();

    function createFacebookShareLink() {
        const facebookShareBaseUrl = "https://www.facebook.com/sharer/sharer.php";
        return `${facebookShareBaseUrl}?u=${encodeURIComponent(currentUrl)}`;
    }

    function shareThisBlogPostViaEmail() {
        const emailBody = `Hi,\n\nI wanted to share this link with you: ${currentUrl}`;
        return `mailto:?subject=${encodeURIComponent(post?.title)}&body=${encodeURIComponent(emailBody)}`;
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                toast.success("Copied link to clipboard", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                // Handle any errors here
            });
    };

    return (
        <>
            <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased max-w-full">
                <header
                    style={{backgroundImage: `url(${post.image.url})`}}
                    className="w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div
                        className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                        <span className="block mb-4 text-gray-300">Published in <Link href="/blog"
                                                                                   className="font-semibold text-white hover:underline">1 Tree Emergency Blog</Link></span>
                        <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">{post.title}</h1>
                    </div>
                </header>
                <div
                    className="flex relative z-20 justify-between p-6 -mt-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
                    <article
                        className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                            <div
                                className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
                                <span><time className="font-normal text-gray-500 dark:text-gray-400 uppercase"
                                            dateTime="2022-03-08"
                                            title={formatDate(post.sys.firstPublishedAt)}>{formatDate(post.sys.firstPublishedAt)}</time></span>
                            </div>
                            <aside aria-label="Share social media">
                                <div className="not-format">
                                    <Link href={createFacebookShareLink()} data-tooltip-target="tooltip-facebook"
                                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                            <path fillRule="evenodd"
                                                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </Link>
                                    <div id="tooltip-facebook" role="tooltip"
                                         className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                        Share on Facebook
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>

                                    {/*<button data-tooltip-target="tooltip-twitter"*/}
                                    {/*        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
                                    {/*        type="button">*/}
                                    {/*    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">*/}
                                    {/*        <path fill="currentColor"*/}
                                    {/*              d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<div id="tooltip-twitter" role="tooltip"*/}
                                    {/*     className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">*/}
                                    {/*    Share on Twitter*/}
                                    {/*    <div className="tooltip-arrow" data-popper-arrow></div>*/}
                                    {/*</div>*/}

                                    {/*<button data-tooltip-target="tooltip-reddit"*/}
                                    {/*        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
                                    {/*        type="button">*/}
                                    {/*    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
                                    {/*         viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g clipPath="url(#clip0_13676_82300)">*/}
                                    {/*            <path*/}
                                    {/*                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"/>*/}
                                    {/*            <path*/}
                                    {/*                d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"*/}
                                    {/*                fill="white"/>*/}
                                    {/*        </g>*/}
                                    {/*        <defs>*/}
                                    {/*            <clipPath id="clip0_13676_82300">*/}
                                    {/*                <rect width="18" height="18"/>*/}
                                    {/*            </clipPath>*/}
                                    {/*        </defs>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<div id="tooltip-reddit" role="tooltip"*/}
                                    {/*     className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">*/}
                                    {/*    Post on Reddit*/}
                                    {/*    <div className="tooltip-arrow" data-popper-arrow></div>*/}
                                    {/*</div>*/}

                                    <button data-tooltip-target="tooltip-link" onClick={() => copyToClipboard()}
                                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
                                        </svg>
                                    </button>
                                    <div id="tooltip-link" role="tooltip"
                                         className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                        Share link
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>

                                    <Link data-tooltip-target="tooltip-save" href={shareThisBlogPostViaEmail()}
                                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                        <BsSendFill style={{fontSize: '1.2rem'}}/>
                                    </Link>
                                    <div id="dropdownDotsHorizontal"
                                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add
                                                    to collection</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        {documentToReactComponents(
                            post?.body?.json,
                            RichTextOptions(WEBSITE)
                        )}
                    </article>
                    <aside className="hidden xl:block" aria-labelledby="sidebar-label">
                        <div className="xl:w-[336px] sticky top-6">
                            <h3 id="sidebar-label" className="sr-only">Sidebar</h3>
                            {/*<div className="mb-8">*/}
                            {/*    <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">1 Tree*/}
                            {/*        Emergency morning headlines</h4>*/}
                            {/*    <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Get all the stories you*/}
                            {/*        need-to-know from the most powerful name in tree service delivered first thing every*/}
                            {/*        morning*/}
                            {/*        to your inbox</p>*/}
                            {/*    <button type="button" data-modal-target="newsletter-modal"*/}
                            {/*            data-modal-toggle="newsletter-modal"*/}
                            {/*            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-center w-full">Subscribe*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div className="mb-12">
                                <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">Latest
                                    articles</h4>
                                {latestPosts?.map((latestPost) => {
                                    return (
                                        <Link href={`/blog/${latestPost.slug}`} className="mb-6 flex items-center"
                                              key={latestPost.title}>
                                            <img
                                                src={latestPost?.image.url}
                                                className="mr-4 max-w-full w-24 h-24 rounded-lg object-cover"
                                                alt={latestPost?.image?.title}/>
                                            <div>
                                                <h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">{latestPost?.title}</h5>
                                                {/*<p className="mb-2 text-gray-500 dark:text-gray-400">{latestPost.excerpt}</p>*/}

                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                            {/*<div>*/}
                            {/*    <a href="#"*/}
                            {/*       className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700">*/}
                            {/*        <svg aria-hidden="true" className="w-8 h-8 text-gray-400" fill="currentColor"*/}
                            {/*             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path fillRule="evenodd"*/}
                            {/*                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"*/}
                            {/*                  clipRule="evenodd"></path>*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">1 Tree Emergency Blog*/}
                            {/*        Page</p>*/}
                            {/*    <p className="text-xs text-gray-400 uppercase dark:text-gray-500">Ads placeholder</p>*/}
                            {/*</div>*/}
                        </div>
                    </aside>
                </div>
            </main>

            <NewsletterSignup/>

            <div id="newsletter-modal" tabIndex="-1"
                 className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full rounded-lg md:h-auto">
                    <div className="flex relative items-center bg-white rounded-lg shadow dark:bg-gray-800">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/people-at-office.png"
                             className="hidden h-64 rounded-l-lg md:flex" alt="office"/>
                        <div>
                            <button type="button" data-modal-toggle="newsletter-modal"
                                    className="text-gray-400 absolute top-3 right-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="p-6 pt-4">
                                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Join our Newsletter
                                </h3>
                                <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Get started with our monthly newsletter for helpful tips on how to run your business
                                    smoothly.
                                </p>
                                <form action="#">
                                    <div
                                        className="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                        <div className="relative mr-3 w-full">
                                            <label htmlFor="email"
                                                   className="hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Email
                                                address</label>
                                            <div
                                                className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path
                                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Your email" type="email" id="email" required=""/>
                                        </div>
                                        <div>
                                            <button type="submit"
                                                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}