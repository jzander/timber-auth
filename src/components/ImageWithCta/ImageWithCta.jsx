export const ImageWithCta = ({onHomepage}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full dark:hidden"
                     src="assets/tree1.webp"
                     alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Choose
                        1
                        Tree Emergency</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">1 Tree Emergency Members
                        are selected for their expertise in tree care. They are certified, licensed, and
                        insured professionals equipped to handle all tree-related tasks. Our team is trained
                        to carefully remove trees from structures and take measures to prevent further damage.</p>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Throughout the process,
                        our
                        staff maintains clear communication with all parties involved. We ensure insurance adjusters
                        receive necessary documentation. Our Members are well-versed in the requirements for
                        fulfilling tree claims, and we prioritize homeowner satisfaction. You
                        can depend on our team of professionals for quick and efficient assistance in any situation.</p>
                    <a href="#"
                       className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}