import Link from "next/link";

export const DashboardFooter = () => {
    return (
        <footer
            className="p-4 bg-white rounded-lg shadow md:p-6 lg:p-8 dark:bg-gray-800 lg:flex lg:items-center lg:justify-between antialiased pb-24 md:pb-6">
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:text-center xl:mb-0">
                &copy; 2024 <Link href="/" className="hover:underline" target="_blank">1 Tree Emergency</Link>.
                All rights reserved.
            </p>
            <div className="items-center sm:flex sm:space-x-4 lg:space-x-6">
                <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400 sm:mb-0">
                    On every page
                    <button id="dropdownShowButton" data-dropdown-toggle="dropdownShow"
                            className="inline-flex items-center ml-1.5 p-1.5 text-sm font-semibold text-gray-900 rounded-full hover:text-primary-600 dark:hover:text-primary-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                            type="button">
                        <span className="sr-only">Open show items menu</span>
                        100
                        <svg className="ml-1 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>

                    <div id="dropdownShow"
                         className="hidden z-10 w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownInformdropdownShowButtonationButton">
                            <li>
                                <a href="#"
                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">200</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">500</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1000</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400 xl:text-center sm:mb-0">
                    Show <span className="font-semibold text-gray-900 dark:text-white">1-15</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">987</span>
                </p>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-primary-700 border border-primary-300 bg-primary-50 hover:bg-primary-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#"
                               className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}