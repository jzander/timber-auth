export const ImagesWithContentSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Full-spectrum tree services</h2>
                    <p className="mb-4">From emergency tree removal, temporary roof tarping, boarding up after severe weather events or in situations where an insurance claim or emergency is involved, we are here to help you navigate the process.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be
                        simple and quick.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg"
                         src="/assets/tree1.webp"
                         alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg"
                             src="/assets/tree2.webp"
                             alt="office content 2"/>
                </div>
            </div>
        </section>
)
}