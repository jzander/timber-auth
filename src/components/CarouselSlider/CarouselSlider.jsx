import {CtaTwoCards} from "../CtaTwoCards/CtaTwoCards";
import {Carousel} from "flowbite-react";

export const CarouselSlider = () => {
    return (
        <section className="bg-white dark:bg-gray-900 lg:py-16 py-8">
            <div className="px-4 mx-auto max-w-screen-md text-center lg:px-0">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Check out some of our top listings
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                        View all housing in Miami, FL or check out listings in popular cities
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl">
                <Carousel indicators={'ic-button'}>
                    <CtaTwoCards/>
                    <CtaTwoCards/>
                    <CtaTwoCards/>
                    <CtaTwoCards/>
                </Carousel>
                <div className="mt-8 text-center">
                    <a href="#" title=""
                       className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                        View all housing in Miami
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}