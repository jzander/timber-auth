import Link from "next/link";

export const FaqPage = () => {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">General questions</h2>

                <div className="mt-6" id="accordion-flush" data-accordion="open"
                     data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                     data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <h2 id="accordion-flush-heading-1">
                        <button type="button"
                                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white"
                                data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                aria-controls="accordion-flush-body-1">
                            <span>What does 1 Tree Emergency do?</span>
                            <svg data-accordion-icon className="h-5 w-5 shrink-0" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                        <div className="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">1 Tree Emergency
                                offers emergency
                                tree removal, temporary roof tarping, and board-up services in 49 states. Whether
                                you are a homeowner, insurance company, government agency, or municipality, we can
                                respond to your emergency and help you close the claim quickly.</p>
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to
                                    you?</p>
                                <div className="flex items-center">
                                    <input id="general-radio-1" type="radio" value="" name="general-radio"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-1"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes:
                                        9 </label>
                                </div>
                                <div className="flex items-center">
                                    <input id="general-radio-2" type="radio" value="" name="general-radio"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-2"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No:
                                        0 </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-flush-heading-2">
                        <button type="button"
                                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white"
                                data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                                aria-controls="accordion-flush-body-2">
                            <span>Why use 1 Tree Emergency?</span>
                            <svg data-accordion-icon className="h-5 w-5 shrink-0" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">At 1 Tree
                                Emergency, we have a
                                strong background in arboriculture. We know the terminology, demands, and costs, so
                                we can tell when something isn’t right.</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Most tree care
                                companies don’t know much
                                about the insurance industry and claims. They might not understand what needs to be
                                done to close a claim. But we do, and we make sure our Members do too.</p>
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to
                                    you?</p>
                                <div className="flex items-center">
                                    <input id="general-radio-3" type="radio" value="" name="general-radio-2"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-3"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes:
                                        16 </label>
                                </div>
                                <div className="flex items-center">
                                    <input id="general-radio-4" type="radio" value="" name="general-radio-2"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-4"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No:
                                        3 </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-flush-heading-3">
                        <button type="button"
                                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white"
                                data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                                aria-controls="accordion-flush-body-3">
                            <span>Does 1 Tree Emergency respond to my area?</span>
                            <svg data-accordion-icon className="h-5 w-5 shrink-0" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <div className="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                We respond to emergencies in every
                                state but Alaska.
                            </p>
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to
                                    you?</p>
                                <div className="flex items-center">
                                    <input id="general-radio-5" type="radio" value="" name="general-radio-3"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-5"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes:
                                        16 </label>
                                </div>
                                <div className="flex items-center">
                                    <input id="general-radio-6" type="radio" value="" name="general-radio-3"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-6"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No:
                                        3 </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="accordion-flush-heading-4">
                        <button type="button"
                                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white"
                                data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
                                aria-controls="accordion-flush-body-4">
                            <span>How do I start sending claims and bids?</span>
                            <svg data-accordion-icon className="h-5 w-5 shrink-0" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                        <div className="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                If you have a claim, you can submit it to us through our secure online form. Or, you can
                                contact us at (866) 320-7003.
                            </p>
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to
                                    you?</p>
                                <div className="flex items-center">
                                    <input id="general-radio-7" type="radio" value="" name="general-radio-4"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-7"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes:
                                        16 </label>
                                </div>
                                <div className="flex items-center">
                                    <input id="general-radio-8" type="radio" value="" name="general-radio-4"
                                           className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label htmlFor="general-radio-8"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No:
                                        3 </label>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </section>
    )
}