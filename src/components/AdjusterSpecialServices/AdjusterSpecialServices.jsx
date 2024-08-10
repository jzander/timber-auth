import {NewClaimCta} from "@/components/NewClaimCta/NewClaimCta";

export const AdjusterSpecialServices = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
                    <img className="mb-4 w-full lg:mb-0 rounded-lg"
                         src="/assets/treehands2.webp"
                         alt="feature image"/>
                    <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Specialty
                            Services</h2>
                        <p className="mb-8 font-light lg:text-xl">In addition to emergency tree removal, we can also provide
                            the
                            following services upon request:
                        </p>
                        <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                            <div className="flex">
                                <div
                                    className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">

                                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Arborist
                                        Reporting</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Giving you vital
                                        information
                                        on the condition of the tree, pre- and post-loss, and a determination on what
                                        conditions precipitated or catalyzed the loss.</p>
                                    {/*<a href="#"*/}
                                    {/*   className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600">*/}
                                    {/*    Learn more*/}
                                    {/*    */}
                                    {/*    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                                    {/*         aria-hidden="true"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                                    {/*    >*/}
                                    {/*        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                                    {/*              strokeWidth="2"*/}
                                    {/*              d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>*/}
                                    {/*    </svg>*/}

                                    {/*</a>*/}
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div
                                    className="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
                                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Forensic
                                        Investigation</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">When you need a more
                                        intricate dissection of the evidence to determine liability during
                                        subrogation.</p>
                                    {/*<a href="#"*/}
                                    {/*   className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-600">*/}
                                    {/*    Learn more*/}
                                    {/*    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <path fillRule="evenodd"*/}
                                    {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                                    {/*              clipRule="evenodd"></path>*/}
                                    {/*    </svg>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div
                                    className="flex justify-center items-center mr-4 w-8 h-8 bg-teal-100 rounded-full dark:bg-teal-900 shrink-0">
                                    <svg className="w-5 h-5 text-teal-600 dark;text-teal-300" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                              d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Scope & Cost
                                        Analysis</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">An unbiased second
                                        opinion
                                        on the valuation and/or necessity for item(s) on a competitor’s estimate.</p>
                                    {/*<a href="#"*/}
                                    {/*   className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-500 dark:hover:text-teal-600">*/}
                                    {/*    Learn more*/}
                                    {/*    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <path fillRule="evenodd"*/}
                                    {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                                    {/*              clipRule="evenodd"></path>*/}
                                    {/*    </svg>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm">With our comprehensive range of specialty services, we ensure that every
                            aspect
                            of your tree-related concerns is addressed with the utmost precision and professionalism,
                            providing peace of mind and expert solutions tailored to your specific needs.</p>
                    </div>
                </div>
            </section>
            <NewClaimCta/>
        </>
    )
}