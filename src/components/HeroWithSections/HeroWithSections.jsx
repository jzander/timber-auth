import {FaTree} from "@react-icons/all-files/fa/FaTree";
import {BiCloudLightning, BiWorld} from "react-icons/bi";
import {AiOutlineAreaChart} from "react-icons/ai";
import {BsTools} from "react-icons/bs";
import {FaClock} from "react-icons/fa";
import {GrEmergency} from "react-icons/gr";
import {FaTent} from "react-icons/fa6";
import {FcDocument} from "react-icons/fc";

export const HeroWithSections = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
                    <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"*/}
                        {/*   role="alert">*/}
                        {/*    <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600">1 Tree Emergency</span> <span*/}
                        {/*    className="text-sm font-medium">Rapid Response, Nationwide Coverage</span>*/}
                        {/*    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">Rapid
                            Response, Nationwide Coverage</h1>
                        <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">At
                            1 Emergency Tree Service, we specialize in providing immediate, nationwide tree-related
                            emergency services. Our expert teams are ready to respond swiftly to any crisis, ensuring
                            safety and peace of mind for our clients.
                        </p>
                        {/*<form className="max-w-lg mx-auto lg:ml-0" action="#">*/}
                        {/*    <label for="default-search"*/}
                        {/*           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>*/}
                        {/*    <div className="relative">*/}
                        {/*        <input type="search" id="default-search"*/}
                        {/*               className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                        {/*               placeholder="Search Mockups, Logos..." required=""/>*/}
                        {/*        <button type="submit"*/}
                        {/*                className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">*/}
                        {/*            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                <path fillRule="evenodd"*/}
                        {/*                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
                        {/*                      clipRule="evenodd"></path>*/}
                        {/*            </svg>*/}
                        {/*            Search*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                    </div>
                    <div className="col-span-6">
                        <img src="/assets/usa.webp"
                             className="dark:hidden" alt="mockup"/>
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png"
                             className="hidden dark:block" alt="mockup dark"/>
                    </div>
                </div>
                <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <FaTree style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Emergency
                                Tree Removal</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">When disaster strikes, our
                                emergency tree removal service is here to quickly and safely remove fallen or hazardous
                                trees. We work closely with insurance companies to streamline the process, making it as
                                hassle-free as possible for you.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <BiCloudLightning style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Storm
                                Damage Cleanup</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Our storm damage cleanup service
                                helps restore your property to its pre-storm condition. We efficiently handle debris
                                removal and ensure that your surroundings are safe and clear of any potential
                                hazards.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <AiOutlineAreaChart style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Tree
                                Risk Assessment</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Prevention is key. Our tree risk
                                assessment service identifies potential hazards before they become emergencies, helping
                                you maintain a safe environment around your property.</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-8 sm:gap-12 md:grid-cols-3 mt-10">
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <FaClock style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">24/7
                                Availability</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Emergencies don&apos;t wait, and
                                neither do we. Our team is available 24/7 to provide immediate assistance for any
                                tree-related emergency, ensuring you&apos;re never left in a dangerous situation.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <FcDocument style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Insurance
                                Coordination</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">We simplify the insurance process
                                by working directly with your insurance provider, ensuring that claims are handled
                                swiftly and efficiently, so you can focus on what matters most.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <BiWorld style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Nationwide
                                Network</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">With our extensive network of
                                professional arborists and tree service companies across the country, we provide prompt
                                and reliable services no matter where you are.</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-8 sm:gap-12 md:grid-cols-3 mt-10">
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <BsTools style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Board
                                Up</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                If a tree falls on your home, the damage can be huge. After making sure your family is
                                safe, securing your home is the next important step. If your home’s doors and windows
                                are broken or damaged, you need professional emergency board-up services.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <GrEmergency style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Storm
                                Response</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                When a storm hits, our team mobilizes to provide immediate assistance. We ensure that
                                your property is safe and secure, coordinating
                                with insurance adjusters to provide comprehensive documentation and support.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={'text-primary-600 text-lg w-6 h-6 mr-3'}>
                            <FaTent style={{fontSize: '1.5rem'}}/>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Tarp
                                Installation</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Safeguard your home from further damage with temporary roof tarps. After removing a
                                fallen tree, we install roof tarps to protect your home from rain, wind, and other
                                elements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}