export const ContentCardImages = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center text-gray-900">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Turn
                        collaboration into innovation</h2>
                    {/*<div*/}
                    {/*   className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">*/}
                    {/*    About 1 Tree Emergency*/}
                    {/*</div>*/}
                </div>
                <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
                    <div className="lg:flex mb-2 md:flex-col md:mb-0">
                        <img className="mr-4 w-full h-36 md:w-full md:h-auto rounded-lg aspect-video object-cover"
                             src="assets/tree4.webp"
                             alt="tree image"/>
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white mt-5">Arborists</h3>
                            <p className="text-gray-500 dark:text-gray-400"> We specialize in handling all communication
                                with insurance
                                companies about tree related work and payouts, so you don&apos;t have to. As a Member,
                                we&apos;ll let you know where there may be threats of storm damage or tree related
                                emergencies nearby.</p>
                        </div>
                    </div>
                    <div className="lg:flex mb-2 md:flex-col md:mb-0">
                        <img className="mr-4 w-full h-36 md:w-full md:h-auto rounded-lg  aspect-video object-cover"
                             src="assets/adjuster.webp"
                             alt="tree image 2"/>
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white mt-5">Adjusters</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our network of licensed and certified
                                industry professionals can address and close claims quickly and with precision.
                                We&apos;ll send the most qualified nearby professional to handle each incident with
                                care, innovating and streamlining the process so you don&apos;t have to.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex md:flex-col">
                        <img className="mr-4 w-full h-36 md:w-full md:h-auto rounded-lg  aspect-video object-cover"
                             src="assets/homeowner.webp"
                             alt="tree image 3"/>
                        <div>
                            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white mt-5">Homeowners</h3>
                            <p className="text-gray-500 dark:text-gray-400">When trouble strikes your property, we are
                                there to ensure you get prompt and safe assistance with tree removal, roof tarping, and
                                board-up services. Our team will be fully equipped for the job and will work within the
                                limits of your insurance policy to ensure that everything is handled efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}