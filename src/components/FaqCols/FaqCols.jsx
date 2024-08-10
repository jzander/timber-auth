import Link from "next/link";

export const FaqCols = ({useH1}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                {useH1 ? <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h1> : <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>}
                <div
                    className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
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
                            <p className="text-gray-500 dark:text-gray-400">
                                1 Tree Emergency specializes in emergency tree removal, temporary roof tarping, and
                                board-up services. We are equipped to respond swiftly to emergencies and assist
                                homeowners, insurance companies, government agencies, and municipalities in resolving
                                claims efficiently.
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
                            <p className="text-gray-500 dark:text-gray-400">
                                At 1 Tree Emergency, we bring extensive expertise in arboriculture to every job. Our
                                knowledge of tree care, industry standards, and associated costs ensures we provide
                                accurate and reliable services.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-5">
                                Unlike many tree care companies, we have a deep understanding of the insurance industry
                                and claims process. We ensure our team is well-versed in what needs to be done to
                                expedite and close claims efficiently.
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
                            <p className="text-gray-500 dark:text-gray-400">
                                We provide emergency services across a large area. Contact us to find out if we service
                                your location.
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
                                How do I start sending insurance claims and bids?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Reach out to us at <Link href={"tel:8663207003"}>(866) 320-7003</Link> and we&apos;ll walk you
                                through it.
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
                                I&apos;m an arborist, how do I join the Network and become a member?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Becoming a member of 1 Tree Emergency is free and easy. Joining our network gives you
                                access to job opportunities.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-5">
                                To join, simply give us a call at <Link href={"tel:8663207003"}>(866) 320-7003</Link>. Be
                                prepared to submit your W-9,
                                Worker’s Compensation, and General Liability documents. Once reviewed, we&apos;ll
                                contact you
                                to discuss further steps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
