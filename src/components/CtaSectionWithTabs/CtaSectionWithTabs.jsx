import Link from "next/link";

export const CtaSectionWithTabs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div>

                        <div className="mt-8">
                            <div id="ios" role="tabpanel" aria-labelledby="ios-tab">
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                            Full-spectrum tree services at your fingertips
                                        </h2>
                                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                            Our app helps users easily track their tree service jobs and process claims.
                                            With a user-friendly interface,
                                            the app allows users to quickly input the details of their job, and then
                                            makes processing tree service claims easy and efficient.
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2.5">
                                                <div
                                                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg aria-hidden="true" className="w-3.5 h-3.5"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">Emergency tree removal</span>
                                            </li>

                                            <li className="flex items-center gap-2.5">
                                                <div
                                                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg aria-hidden="true" className="w-3.5 h-3.5"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">Temporary roof tarping</span>
                                            </li>

                                            <li className="flex items-center gap-2.5">
                                                <div
                                                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg aria-hidden="true" className="w-3.5 h-3.5"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">Boarding up after severe weather events</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <div
                                                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg aria-hidden="true" className="w-3.5 h-3.5"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">Insurance claims or emergencies</span>
                                            </li>
                                        </ul>

                                        <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                                            We are here to help you navigate the process.
                                        </h3>
                                    </div>

                                    {/*<div>*/}
                                    {/*    <a href="#" title=""*/}
                                    {/*       className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500">*/}
                                    {/*        See how it works*/}
                                    {/*        <svg aria-hidden="true" className="w-5 h-5 ml-1.5"*/}
                                    {/*             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
                                    {/*             fill="currentColor">*/}
                                    {/*            <path fillRule="evenodd"*/}
                                    {/*                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                                    {/*                  clipRule="evenodd"/>*/}
                                    {/*        </svg>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div
                            className="relative mx-auto border-gray-800 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div
                                className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div
                                className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div
                                className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div
                                className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div
                                className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div
                                className="rounded-[2.5rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img
                                    src="/assets/usaphone.webp"
                                    className="dark:hidden w-[272px] h-[572px]"
                                    alt=""
                                />
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                                    className="hidden dark:block w-[272px] h-[572px]"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
                    <div
                        className="relative mx-auto border-gray-800 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                        <div
                            className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div
                            className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                        <div
                            className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                        <div
                            className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                        <div
                            className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                        <div
                            className="rounded-[2.5rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <img
                                src="/assets/usaphonetree.webp"
                                className="dark:hidden w-[272px] h-[572px]"
                                alt=""
                            />
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                                className="hidden dark:block w-[272px] h-[572px]"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">Homeowners
                                face obstacles too</h2>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                Many lack the industry knowledge to choose the right contractor or to ensure services
                                fall within their policy limits. These three sectors need to work together seamlessly,
                                yet they often don’t due to a few critical missing elements.
                            </p>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                <span className="font-semibold text-gray-900 dark:text-white">1
                                Tree Emergency</span> aims to bridge these gaps, becoming the essential link for
                                arborists, adjusters, and homeowners across the U.S.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2.5">
                                    <div
                                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg aria-hidden="true" className="w-3.5 h-3.5"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">A Member Network of licensed and certified companies</span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div
                                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg aria-hidden="true" className="w-3.5 h-3.5"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">Handling insurance jobs with precision and ease</span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div
                                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg aria-hidden="true" className="w-3.5 h-3.5"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">Accredited by prestigious industry associations</span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div
                                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg aria-hidden="true" className="w-3.5 h-3.5"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">Adhering to policy limits of our insurance partners</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/faq"
                                title=""
                                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                role="button"
                            >
                                FAQ&apos;s
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </Link>

                            <a
                                href="#"
                                title=""
                                className="px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                            >
                                Get a demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
