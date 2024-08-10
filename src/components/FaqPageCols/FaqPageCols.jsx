import Link from "next/link";

export const FaqPageCols = () => {
    return (
        <section className="bg-white py-2 antialiased dark:bg-gray-900 md:py-0">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-5">General
                    questions</h2>

                <div
                    className="grid pt-2 text-left border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"></path>
                                </svg>
                                What does 1 Tree Emergency do?
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                1 Tree Emergency offers emergency tree removal, temporary roof tarping, and board-up
                                services in 49 states. Whether you are a homeowner, insurance company, government
                                agency, or municipality, we can respond to your emergency and help you close the claim
                                quickly.
                            </p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"></path>
                                </svg>
                                Why use 1 Tree Emergency?
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                At 1 Tree Emergency, we have a strong background in arboriculture. We know the
                                terminology, demands, and costs, so we can tell when something isn’t right.
                            </p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Most tree care companies don’t know much about the insurance industry and claims. They
                                might not understand what needs to be done to close a claim. But we do, and we make sure
                                our Members do too.
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"></path>
                                </svg>
                                Does 1 Tree Emergency respond to my area?
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                We respond to emergencies in every state but Alaska.
                            </p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"></path>
                                </svg>
                                How do I start sending claims and bids?
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                If you have a claim, you can submit it to us through our secure online form. Or, you can
                                contact us at (866) 320-7003.
                            </p>
                        </div>
                        <div className="mt-6 sm:mt-8">
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                Didn&apos;t find the answer?&nbsp;
                                <Link href="/contact" title=""
                                      className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Ask
                                    a question</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
