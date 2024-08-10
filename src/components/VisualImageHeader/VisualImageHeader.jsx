import {AiFillSafetyCertificate} from "@react-icons/all-files/ai/AiFillSafetyCertificate";
import {MdEmergency} from "react-icons/md";
import {BiSolidPhone} from "react-icons/bi";
import Link from "next/link";

export const VisualImageHeader = () => {
    return (
        <section style={{backgroundImage: `url('assets/tree4.webp')`}}
                 className={`bg-no-repeat bg-cover bg-center bg-gray-600 bg-blend-multiply`}>
            <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-24 z-1">
                <div className="mb-6 max-w-screen-lg lg:mb-0">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Emergency
                        Tree Removal & Insurance Coverage Experts</h1>
                    <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">We provide swift,
                        professional tree removal services around the clock, ensuring your safety and peace of mind.
                        Partnering with insurance companies, we make the process seamless and affordable.</p>
                    <Link href="tel:8663207003"
                          className="inline-flex items-center py-4 px-6 text-lg font-semibold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <BiSolidPhone/>&nbsp;Call Us Now (866) 320-7003&nbsp;&nbsp;
                    </Link>
                </div>
                <div
                    className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="mb-1 text-lg font-bold">
                            <svg className="w-6 h-6 text-white inline" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
                                      clipRule="evenodd"/>
                            </svg>
                            &nbsp;
                            Insurance Preferred Vendor
                        </h2>
                        <p className="mb-1 text-sm text-gray-400">Trusted for reliable tree care</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">*/}
                        {/*    Read more*/}
                        {/*    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                    <div>
                        <h2 className="mb-1 text-lg font-bold"><AiFillSafetyCertificate
                            style={{color: "#fff", display: "inline", fontSize: '1.5rem'}}/>&nbsp;Safe and Knowledgeable
                        </h2>
                        <p className="mb-1 text-sm text-gray-400">Expertise for safety and precision.</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">*/}
                        {/*    Read more*/}
                        {/*    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                    <div>
                        <h2 className="mb-1 text-lg font-bold"><MdEmergency
                            style={{color: "#fff", display: "inline", fontSize: '1.5rem'}}/>&nbsp;Emergency Services
                        </h2>
                        <p className="mb-1 text-sm text-gray-400">Swift response for urgent tree care needs</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">*/}
                        {/*    Read more*/}
                        {/*    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                    <div>
                        <h2 className="mb-1 text-lg font-bold">
                            <svg className="w-6 h-6 text-white inline" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                      clipRule="evenodd"/>
                            </svg>
                            &nbsp;24/7, 365
                        </h2>
                        <p className="mb-1 text-sm text-gray-400">Around-the-clock support</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">*/}
                        {/*    Read more*/}
                        {/*    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}