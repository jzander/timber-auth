"use client"
import {useState} from 'react';

export const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('Board Up');

    const tabs = [
        {
            name: 'Board Up',
            icon: 'M11 1.5L6.75 5H4a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 4.5 16H5v2.5a1 1 0 0 0 1.5.865l2.5-1.5a1 1 0 0 0 0-1.73L6.5 14h6.786l-2.196 2.135a1 1 0 0 0 0 1.73l2.5 1.5A1 1 0 0 0 14.5 18.5V16h.5A1.5 1.5 0 0 0 16 14.5V6a1 1 0 0 0-1-1h-2.75L11 1.5z'
        },
        {
            name: 'Storm Response',
            icon: 'M9.75 1a1 1 0 0 0-.958.712L7.646 4.64 4.5 6.524a1 1 0 0 0-.553.98l.562 3.561-2.5 2.945a1 1 0 0 0-.088 1.124l1.724 2.61A1 1 0 0 0 5 18.5h3.514l1.528 3.06A1 1 0 0 0 11.5 22a1 1 0 0 0 .458-.126l3.185-2.288a1 1 0 0 0 .397-.898l.5-3.604 2.952-2.5a1 1 0 0 0 .157-1.371L17.39 6.1 15 3.062a1 1 0 0 0-.836-.438H9.75z'
        },
        {
            name: 'Tarp Installation',
            icon: 'M2 6.5A4.5 4.5 0 0 1 6.5 2h11A4.5 4.5 0 0 1 22 6.5v11A4.5 4.5 0 0 1 17.5 22h-11A4.5 4.5 0 0 1 2 17.5v-11zm2 0v11a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 17.5v-11A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5z'
        },
        {
            name: 'Tree Removal',
            icon: 'M15.5 2a1 1 0 0 1 1 1v2h2.5a1 1 0 1 1 0 2h-2.5v10h1.5a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2h1.5V7h-2.5a1 1 0 1 1 0-2H9v-2a1 1 0 1 1 2 0v2h4V3a1 1 0 0 1 1-1zM9 10h6v8H9v-8z'
        },
        {
            name: 'Service Areas',
            icon: 'M12 1a7 7 0 0 0-7 7c0 2.11 1.13 4.34 3 6.82 1.43 2.05 3.14 3.82 4 4.83.86-1.01 2.57-2.78 4-4.83 1.87-2.48 3-4.71 3-6.82a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
        }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Board Up':
                return (
                    <div className={'text-left'}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Board Up</h3>
                        <p className={'mb-4'}>Board Up Your Property to Prevent Further Damage</p>

                        <p className={'mb-4'}>If a tree falls on your home, the damage can be huge. After making sure
                            your family is safe, securing your home is the next important step. If your home’s doors and
                            windows are broken or damaged, you need professional emergency board-up services.</p>

                        <p className={'mb-4'}>1 Tree Emergency can board up your windows and doors to stop any more
                            rain, wind, or theft from harming your home.</p>

                        <p className={'mb-4'}>For more information about our process, please visit the Insurance
                            Adjusters or Homeowners pages, or check out our FAQs page.</p>
                    </div>
                );
            case 'Storm Response':
                return (
                    <div className={'text-left'}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Storm Response</h3>
                        <p className={'mb-4'}>When a Storm Hits, We Mobilize Several Members for Emergency Services</p>

                        <p className={'mb-4'}>LET EXPERTS HELP YOU WITH YOUR STORM-RELATED DAMAGE</p>

                        <p className={'mb-4'}>Hurricanes are some of the most powerful forces of nature. If your home is
                            in the path of a hurricane or any severe storm, you might end up with major tree damage.
                            This kind of damage can make your property unsafe, so it&apos;s important to have qualified,
                            licensed, and insured arborists handle the work.</p>

                        <p className={'mb-4'}>Our Members are experts in storm work – they are licensed, certified, and
                            masters of the trade. Additionally, 1 Tree Emergency Members are trained to work in tough
                            conditions, like after a hurricane or severe storm.</p>

                        <p className={'mb-4'}>Our staff will keep communicating with everyone involved, ensuring
                            insurance adjusters get all necessary documentation and our 20-Point Audit. Members will
                            understand what needs to be done to satisfy the tree claim, and homeowners will be happy –
                            just like always.</p>
                    </div>
                );
            case 'Tarp Installation':
                return (
                    <div className={'text-left'}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tarp Installation</h3>
                        <p className={'mb-4'}>Safeguard Your Home from More Damage</p>

                        <p className={'mb-4'}>TEMPORARY ROOF TARP CAN PROTECT YOUR HOME FROM THE ELEMENTS</p>

                        <p className={'mb-4'}>When a tree falls on a home, it leaves the property open to rain, wind,
                            insects, and other outside factors that can cause more damage.</p>

                        <p className={'mb-4'}>If your home has been damaged like this, it&apos;s important to put a
                            temporary roof tarp over the broken part as soon as possible. This usually happens after 1
                            Tree Emergency has removed the tree from your house.</p>

                        <p className={'mb-4'}>OUR MEMBERS HANDLE TARP INSTALLATION</p>

                        <p className={'mb-4'}>Putting up a roof tarp is not a simple DIY project. It&apos;s actually
                            very dangerous. Our Members are experts in tarp installation and know all the safety steps
                            needed while working on 1 Tree Emergency jobs.</p>

                        <p className={'mb-4'}>If your home needs a temporary roof tarp before tree removal (usually
                            requested during major storm responses), just let our staff know. We’ll send a Member to
                            your property as soon as possible. After the tree is removed, we’ll install any extra roof
                            tarps needed.</p>
                    </div>
                );
            case 'Tree Removal':
                return (
                    <div className={'text-left'}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tree Removal</h3>
                        <p className={'mb-4'}>If a Tree Falls on Your Property, You Need an Expert Fast</p>

                        <p className={'mb-4'}>WE RESPOND QUICKLY WITH A TRUSTED TEAM</p>

                        <p className={'mb-4'}>Removing trees is dangerous work. When it’s an emergency, like a tree on
                            your roof, it gets even more complicated. That’s why the team doing the job must be
                            licensed, insured, highly skilled, and very focused on safety.</p>

                        <p className={'mb-4'}>We carefully select our Members to ensure they are licensed, certified,
                            and ready to handle these tough situations. With Members in 49 states, we can respond
                            quickly to any emergency.</p>

                        <p className={'mb-4'}>WE MAKE IT EASY AND SAFE FOR YOU</p>

                        <p className={'mb-4'}>Our goal is to make the process quick and simple for you. That’s why we
                            understand both the insurance and arboriculture industries and serve as the
                            one-point-of-contact for everyone involved. Tree removal is complex and dangerous, but we
                            know what it takes to do it safely and efficiently.</p>

                        <p className={'mb-4'}>For more information about our process, please visit the Insurance
                            Adjusters or Homeowners pages, or check out our FAQs.</p>
                    </div>
                );
            case 'Services Areas':
                return (
                    <div className={'text-left'}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Services Areas</h3>
                        <p className={'mb-4'}>1 Tree Emergency Provides Nationwide Coverage (excluding Alaska)</p>

                        <p className={'mb-4'}>1 Tree Emergency Nationwide Coverage</p>

                        <p className={'mb-4'}>Dedicated Professionals Across the Country</p>

                        <p className={'mb-4'}>We team up with arborists, insurance adjusters, and homeowners all over
                            the U.S.</p>

                        <p className={'mb-4'}>Check out our Emergency Tree Removal & Storm Response Service Areas
                            here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
                <div className="md:flex">
                    <ul className="flex-column space-y space-y-4 min-w-56 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                        {tabs.map(tab => (
                            <li key={tab.name}>
                                <button
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full 
                                ${activeTab === tab.name ? 'text-white bg-blue-700 dark:bg-blue-600' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path d={tab.icon}/>
                                    </svg>
                                    {tab.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};
