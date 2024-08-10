export const GridLayoutCards = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Popular
                        Cities</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Find sober living homes
                        in our most popular cities</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div
                        className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 w-full rounded-lg"
                                 src="/assets/images/home2.webp"
                                 alt="Jese Leos"/>
                        </a>
                        <div className="px-5 pb-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Miami</a>
                            </h3>
                            {/*<span className="text-gray-500">CEO & Co Founder</span>*/}
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical
                                strategy of the themesberg platform and brand.</p>

                        </div>
                    </div>
                    <div
                        className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 w-full rounded-lg"
                                 src="/assets/images/home4.webp"
                                 alt="Joseph Mcfall"/>
                        </a>
                        <div className="px-5 pb-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Ft. Lauderdale</a>
                            </h3>
                            {/*<span className="text-gray-500">Senior Front-end Developer</span>*/}
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Joseph drives the technical
                                strategy of the themesberg platform and brand.</p>

                        </div>
                    </div>
                    <div
                        className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 w-full rounded-lg"
                                 src="/assets/images/home1.webp"
                                 alt="Thomas Lean"/>
                        </a>
                        <div className="px-5 pb-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Hollywood</a>
                            </h3>
                            {/*<span className="text-gray-500">Senior Front-end Developer</span>*/}
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Thomas drives the technical
                                strategy of the themesberg platform and brand.</p>

                        </div>
                    </div>
                    <div
                        className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 w-full rounded-lg"
                                 src="/assets/images/home2.webp"
                                 alt="Karen Nelson"/>
                        </a>
                        <div className="px-5 pb-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Plantation</a>
                            </h3>
                            {/*<span className="text-gray-500">SEO Specialist</span>*/}
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Roberta drives the
                                technical strategy of the themesberg platform and brand.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}