import {NewClaimCta} from "@/components/NewClaimCta/NewClaimCta";

export const InstantClaimStatus = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get
                            Important Claim Updates Instantly: Our Process</h2>
                        <p className="mb-4">As an insurance partner, you will get important claim information in real
                            time.
                            You’ll have access to up-front pricing, instant claim status updates, and audit results, all
                            through our advanced technology.
                        </p>
                        <p className="mb-4">We let technology handle the hard work, giving you peace of mind.</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">*/}
                        {/*    Learn more*/}
                        {/*    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                    <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
                        <p className="mb-4">When a tree falls on a property, you want your clients to feel confident
                            that
                            their home will be taken care of. At 1 Tree Emergency, we use the latest technology to keep
                            everyone informed and reassured from the moment the First Notice of Loss (FNOL) is received.
                        </p>
                        <p>Our 20 Point Audit process ensures clear and easy communication between insurance adjusters,
                            homeowners, Members, and our staff. This is all made possible through the 1 Tree Emergency
                            Member and Homeowner apps.</p>
                    </div>
                </div>
            </section>
            <NewClaimCta/>
        </>
    )
}