export const HeaderWithTwoColumns = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our
                        Journey</h2>
                    <p className="mb-4">Our President/CEO, a second-generation arborist, has deep roots in the
                        arboriculture industry. He understands the challenges of running a small business and securing
                        insurance jobs.</p>
                    <p className="mb-4">This insight led to the creation of 1 Tree Emergency.</p>
                    <a href="#"
                       className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Learn more
                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
                    <p>As we delved into the insurance sector, we gained a clearer picture of adjusters’ needs and
                        realized many lack familiarity with the tree care industry. This gap often leads to fraudulent
                        contractors being hired and additional work for adjusters due to constant onboarding of new
                        contractors, preventing them from following their preferred processes efficiently.</p>
                </div>
            </div>
        </section>
    )
}