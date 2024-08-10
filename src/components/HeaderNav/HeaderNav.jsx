"use client"
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";

export const HeaderNav = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State to detect mobile
    const megaMenuTimeoutRef = useRef(null);

    useEffect(() => {
        // Function to detect mobile devices
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check on initial load
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleMegaMenu = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (isMobile) {
            setIsMegaMenuOpen((prevState) => {
                const newState = !prevState;
                return newState;
            });
        }
    };

    const openMegaMenu = () => {
        if (!isMobile) {
            if (megaMenuTimeoutRef.current) {
                clearTimeout(megaMenuTimeoutRef.current);
            }
            setIsMegaMenuOpen(true);
        }
    };

    const closeMegaMenu = () => {
        if (!isMobile) {
            megaMenuTimeoutRef.current = setTimeout(() => {
                setIsMegaMenuOpen(false);
            }, 300); // Delay to allow the mouse to move to the megamenu
        }
    };

    const keepMegaMenuOpen = () => {
        if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMegaMenuImmediately = () => {
        setIsMegaMenuOpen(false);
    };

    useEffect(() => {
        // Close the megamenu if clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('#mega-menu-full-image-dropdown') &&
                !event.target.closest('#mega-menu-button')) {
                setIsMegaMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            if (megaMenuTimeoutRef.current) {
                clearTimeout(megaMenuTimeoutRef.current);
            }
        };
    }, []);

    return (
        <header className="shadow-md">
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="/" className="hidden lg:block flex items-center">
                        <img src="/assets/logo.png" className="mr-3 h-5 sm:h-20" alt="1 Tree Emergency Logo"/>
                    </a>
                    <div className="flex flex-wrap items-center justify-center md:justify-normal">
                        <Link href="tel:8663207003"
                           className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            &nbsp;(866) 320-7003
                            <div
                                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                24hrs
                            </div>
                        </Link>
                        <Link href="/contact"
                              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg
                                className="w-6 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                                <path
                                    d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                            </svg>
                            <span className="ml-3 text-sm">Contact Us</span>
                        </Link>
                        <Link href="/join"
                              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                 className="w-6 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                            <span className="ml-3 text-sm">Join our network</span>
                        </Link>
                        <Link href="/submit-claim"
                              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fillRule="evenodd"
                                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="ml-3 text-sm">Submit a claim</span>
                        </Link>

                        <span
                            className="hidden md-block mr-0 ml-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline lg:mr-3 lg:ml-5"></span>
                        <div className='flex justify-center w-full md:w-auto'>
                            <a href="#"
                               className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
                               onMouseEnter={closeMegaMenuImmediately}>
                                <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 320 512">
                                    <path
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
                               onMouseEnter={closeMegaMenuImmediately}>
                                <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
                               onMouseEnter={closeMegaMenuImmediately}>
                                <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600"
                               onMouseEnter={closeMegaMenuImmediately}>
                                <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                                </svg>
                            </a>
                        </div>
                        <span
                            className="hidden md-block mr-0 ml-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline lg:mr-3 lg:ml-5"></span>
                        <Link href={'/login'}
                              className="hidden ml-3 text-sm bg-primary-600 lg:inline-flex py-2 px-4 text-white rounded">Login</Link>
                    </div>
                </div>
            </nav>
            <nav className="hidden lg:block bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 border-y">
                <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
                    <div className="flex items-center lg:order-1">
                        <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
                            <li>
                                <Link href="/"
                                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                                      aria-current="page" onMouseEnter={closeMegaMenuImmediately}>Home</Link>
                            </li>
                            <li>
                                <Link href="/about"
                                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                                      onMouseEnter={closeMegaMenuImmediately}>About
                                    Us</Link>
                            </li>
                            <li>
                                <span id="mega-menu-button" onMouseEnter={openMegaMenu}
                                      onClick={toggleMegaMenu} onTouchStart={toggleMegaMenu}
                                      className="cursor-pointer text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500">Our
                                    Customers</span>
                            </li>
                            <li>
                                <Link href="/services"
                                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                                      onMouseEnter={closeMegaMenuImmediately}>Services</Link>
                            </li>
                            <li>
                                <Link href="/faq"
                                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                                      onMouseEnter={closeMegaMenuImmediately}>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div
                className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 block lg:hidden">
                <Link href="/" className="lg:hidden flex items-center">
                    <img src="/assets/mobile-logo.png" className="mr-3 h-7 sm:h-9" alt="Flowbite Logo"/>
                </Link>
                <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu"
                        className="items-center p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        onClick={toggleMobileMenu}>
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav id="toggleMobileMenu"
                 className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white lg:bg-gray-50 lg:dark:bg-gray-800 dark:bg-gray-900`}>
                <div className="px-0 lg:py-3 lg:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-col mt-0 w-full text-sm font-medium lg:mr-6 lg:flex-row">
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="/"
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                                      aria-current="page">Home</Link>
                            </li>
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="/about"
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">About
                                    Us</Link>
                            </li>
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="#" onMouseEnter={openMegaMenu} onClick={toggleMegaMenu}
                                      onTouchStart={toggleMegaMenu}
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Our
                                    Customers</Link>
                            </li>
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="/services"
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Services</Link>
                            </li>
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="/faq"
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">FAQs</Link>
                            </li>
                            <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8 lg:hidden">
                                <Link href="/login"
                                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="mega-menu-full-image-dropdown"
                 className={`${isMegaMenuOpen ? 'block' : 'hidden'} bg-white border-gray-200 border-t-0 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 lg:absolute lg:w-full lg:z-[100]`}
                 onMouseEnter={keepMegaMenuOpen} onMouseLeave={closeMegaMenu}>
                <div
                    className="grid gap-2 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                    <Link href="/arborists"
                          className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                          style={{backgroundImage: 'url(/assets/tree1.webp)'}}>
                        <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Arborists</p>
                        <button type="button"
                                className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                            Learn more
                            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </Link>
                    <Link href="/adjusters"
                          className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                          style={{backgroundImage: 'url(/assets/adjuster.webp)'}}>
                        <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Adjusters</p>
                        <button type="button"
                                className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                            Learn more
                            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </Link>
                    <Link href="/homeowners"
                          className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                          style={{backgroundImage: 'url(/assets/homeowner.webp)'}}>
                        <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Homeowners</p>
                        <button type="button"
                                className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                            Learn more
                            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};