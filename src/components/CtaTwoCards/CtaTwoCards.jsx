import {FaRegBookmark} from "react-icons/fa";
import {IoChatbubbleEllipsesOutline, IoChatbubbleEllipsesSharp} from "react-icons/io5";

export const CtaTwoCards = () => {
    return (
        <section className="bg-white dark:bg-gray-900 px:6 xl:px-12">
            <div className="max-w-screen-xl px-4 mx-auto lg:px-6 ">
                <div className="grid grid-cols-1 gap-4 mt-8 xl:gap-12 md:grid-cols-2">
                    <div
                        className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <img className="object-cover w-full rounded-lg shadow-lg"
                             src="/assets/images/home2.webp" alt=""/>

                        <div>
                            <div className="flex items-center justify-between gap-6">
                                <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Ray&apos;s Beach House
              </span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Miami Beach, FL
              </span>
                                </div>
                                <span className="text-xs font-normal text-right text-gray-500 dark:text-gray-400">
              3 rooms available
            </span>
                            </div>
                            {/*<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">*/}
                            {/*    <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '85%'}}></div>*/}
                            {/*</div>*/}
                        </div>

                        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                            Luxury & stylish home with spacious yard
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Our fundraisers are a creative bunch when it comes to taking on challenges, from beard
                            shaves and bake sales
                            to stand-up
                            comedy and streaming marathons. There is something for everyone.
                        </p>
                        <div className="flex items-center justify-between gap-0">
                            <div className="flex flex-row gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                                <a href="#" title=""
                                   className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                   role="button">
                                    Apply
                                </a>

                                <a href="#" title=""
                                   className="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                   role="button">
                                    Message&nbsp;<IoChatbubbleEllipsesOutline/>
                                </a>
                            </div>
                            <a href="#" title=""
                               className="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                               role="button">
                                <FaRegBookmark/>
                            </a>
                        </div>
                    </div>

                    <div
                        className="hidden md:block p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <img className="object-cover w-full rounded-lg shadow-lg"
                             src="/assets/images/home1.webp" alt=""/>

                        <div>
                            <div className="flex items-center justify-between gap-6">
                                <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Ashford House
              </span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Coconut Grove, FL
              </span>
                                </div>
                                <span className="text-xs font-normal text-right text-gray-500 dark:text-gray-400">
              2 rooms available
            </span>
                            </div>
                            {/*<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">*/}
                            {/*    <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '50%'}}></div>*/}
                            {/*</div>*/}
                        </div>

                        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                            Beautiful and cozy oasis with pool & spa
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Our fundraisers are a creative bunch when it comes to taking on challenges, from beard
                            shaves and bake sales
                            to stand-up
                            comedy and streaming marathons. There is something for everyone.
                        </p>

                        <div className="flex items-center justify-between gap-0">
                            <div className="flex flex-row gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                                <a href="#" title=""
                                   className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                   role="button">
                                    Apply
                                </a>

                                <a href="#" title=""
                                   className="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                   role="button">
                                    Message&nbsp;<IoChatbubbleEllipsesOutline/>
                                </a>
                            </div>
                            <a href="#" title=""
                               className="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                               role="button">
                                <FaRegBookmark/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}