import Link from "next/link";

export const Arborists = () => {
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
                                            Who We Are
                                        </h2>
                                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                            1 Tree Emergency manages the most efficient tree service contractor network
                                            in the country. We handle emergency tree removal, debris disposal, tarp, and
                                            board-up services for insurance claims across the U.S.
                                        </p>
                                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                            As we expand our network of insurance partners, the need for tree care
                                            professionals is growing. There is a high demand for more 1 Tree Emergency
                                            Members in various parts of the U.S. to keep providing quick, safe, and
                                            professional emergency services. We find the work, so arborists don’t have
                                            to.
                                        </p>
                                    </div>
                                    <div>
                                        <Link href="/faq" title=""
                                           className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            See our FAQ&apos;s
                                            <svg aria-hidden="true" className="w-5 h-5 ml-1.5"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </Link>
                                    </div>
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


                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">How
                                to Join the Network</h2>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                To join our network and become a 1 Tree Emergency Member, you must be a certified
                                arborist, professional tree care service provider, or TCIA-accredited company. You also
                                need Workers’ Compensation Insurance and $1 million in General Liability with a $2
                                million aggregate.
                            </p>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                For more information on becoming a 1 Tree Emergency Member and working our jobs, please
                                visit our <Link href={'/faq'}>FAQs page</Link>.
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
                        <div>
                            <Link href="/join" title=""
                                  className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Join the network
                                <svg aria-hidden="true" className="w-5 h-5 ml-1.5"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
