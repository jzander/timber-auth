import {GiBunkBeds} from "react-icons/gi";
import {IoIosBed} from "react-icons/io";

export const SelectRoomType = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">I&apos;m looking
                    for...</h2>
                {/*<p className="text-gray-500 sm:text-xl dark:text-gray-400">Here are a few reasons why you should choose*/}
                {/*    Flowbite</p>*/}
                <div
                    className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0 max-w-2xl mx-auto">
                    <div className={'border rounded-lg p-5 border-gray-200 bg-gray-100 cursor-pointer'}>
                        <div className={'text-center mx-auto w-full mb-5'}>
                            <GiBunkBeds style={{margin: '0 auto', fontSize: '2rem', color: "#2563eb"}}/>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Shared Room</h3>
                        <a href="#"
                           className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
                            Community helps accountability <svg className="ml-1 w-5 h-5" fill="currentColor"
                                                                   viewBox="0 0 20 20"
                                                                   xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                        </a>
                    </div>
                    <div className={'border rounded-lg p-5 border-gray-200  bg-gray-100 cursor-pointer'}>
                        <div className={'text-center mx-auto w-full mb-5'}>
                            <IoIosBed style={{margin: '0 auto', fontSize: '2rem', color: "#2563eb"}}/>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Single Room</h3>
                        <a href="#"
                           className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
                            Privacy when you need it <svg className="ml-1 w-5 h-5" fill="currentColor"
                                                                  viewBox="0 0 20 20"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}