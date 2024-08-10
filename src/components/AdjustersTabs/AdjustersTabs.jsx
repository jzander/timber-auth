"use client"
import React, {useState} from 'react';
import {InstantClaimStatus} from "@/components/InstantClaimStatus/InstantClaimStatus";
import {WhyAdjustersUseUs} from "@/components/WhyAdjustersUseUs/WhyAdjustersUseUs";
import {AdjusterProfessionals} from "@/components/AdjusterProfessionals/AdjusterProfessionals";
import {AdjusterSpecialServices} from "@/components/AdjusterSpecialServices/AdjusterSpecialServices";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {useRouter} from "next/navigation";

export const AdjustersTabs = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState(tabParam || 'instant-claim-status');
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`?tab=${tabName.toLowerCase()}`, undefined, { shallow: true });
    };

    return (
        <section className={'max-w-7xl mx-auto mt-10 mb-20'}>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                        <Link
                            href={`?tab=instant-claim-status`}
                            onClick={() => handleTabClick('instant-claim-status')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'instant-claim-status' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                        >
                            <svg
                                className={`w-4 h-4 me-2 ${activeTab === 'instant-claim-status' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                      clipRule="evenodd"/>
                            </svg>
                            Instant Claim Status
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href={`?tab=why-adjusters-use-us`}
                            onClick={() => handleTabClick('why-adjusters-use-us')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'why-adjusters-use-us' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                        >
                            <svg
                                className={`w-4 h-4 me-2 ${activeTab === 'why-adjusters-use-us' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
                                      clipRule="evenodd"/>
                            </svg>
                            Why Insurance Adjusters Use Us
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href={`?tab=we-are-professionals`}
                            onClick={() => handleTabClick('we-are-professionals')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'we-are-professionals' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                        >
                            <svg
                                className={`w-4 h-4 me-2 ${activeTab === 'we-are-professionals' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                                <path fillRule="evenodd"
                                      d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                      clipRule="evenodd"/>
                                <path
                                    d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
                            </svg>
                            We Are Professionals
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link
                            href={`?tab=specialty-services`}
                            onClick={() => handleTabClick('specialty-services')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'specialty-services' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                        >
                            <svg
                                className={`w-4 h-4 me-2 ${activeTab === 'specialty-services' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                                      clipRule="evenodd"/>
                            </svg>
                            Specialty Services
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-0">
                {activeTab === 'instant-claim-status' && (
                    <div className="tab-content">
                        <InstantClaimStatus/>
                    </div>
                )}
                {activeTab === 'why-adjusters-use-us' && (
                    <div className="tab-content">
                        <WhyAdjustersUseUs/>
                    </div>
                )}
                {activeTab === 'we-are-professionals' && (
                    <div className="tab-content">
                        <AdjusterProfessionals/>
                    </div>
                )}
                {activeTab === 'specialty-services' && (
                    <div className="tab-content">
                        <AdjusterSpecialServices/>
                    </div>
                )}
            </div>
        </section>
    );
};
