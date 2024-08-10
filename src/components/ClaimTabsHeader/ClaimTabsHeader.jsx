"use client"
import React, {useEffect, useState} from 'react';
import {SubmitClaimForm} from "@/components/SubmitClaimForm/SubmitClaimForm";
import {FaTree} from "@react-icons/all-files/fa/FaTree";
import {useRouter} from "next/navigation";
import {encodeIntToBase64} from "@/utils/encode";

export const ClaimTabsHeader = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeStep, setActiveStep] = useState(1);
    const [claimId, setClaimId] = useState(null)
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveTab(`tab${activeStep}`);

        if (typeof window !== 'undefined') {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('step', activeStep);
            if (claimId) {
                currentUrl.searchParams.set('claimId', encodeIntToBase64(claimId));
            }
            if (activeStep > 5) {
                currentUrl.searchParams.delete('step');
                currentUrl.searchParams.delete('claimId');
            }
            router.push(currentUrl.pathname + currentUrl.search);
        }
    }, [activeStep, router, claimId]);
    console.log('claimId', claimId)
    return (
        <section className={'max-w-7xl mx-auto mt-10 mb-20'}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Claim
                    Center</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Please
                    fill out our form below to file a claim for immediate tree service assistance. We will review the
                    details and get back to you right away with next steps</p>
            </div>
            {activeStep < 5 &&
                <div className="hidden lg:block border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center">
                        <li className="me-2">
                            <button
                                className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'tab1' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                            >
                                <svg
                                    className={`w-4 h-4 me-2 ${activeTab === 'tab1' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                          clipRule="evenodd"/>
                                </svg>
                                Homeowner Details
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'tab2' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                            >
                                <svg
                                    className={`w-4 h-4 me-2 ${activeTab === 'tab2' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                Incident Information
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'tab3' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                            >
                                <FaTree
                                    style={{color: activeTab === 'tab2' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}}/>&nbsp;
                                Tree Information
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'tab4' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                            >
                                <svg
                                    className={`w-4 h-4 me-2 ${activeTab === 'tab4' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path
                                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                </svg>
                                Insurance Information
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-flex items-center justify-center p-4 border-b-2 ${activeTab === 'tab5' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:text-gray-500 dark:hover:text-gray-300'} rounded-t-lg group`}
                            >
                                <svg
                                    className={`w-4 h-4 me-2 ${activeTab === 'tab5' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                                          clipRule="evenodd"/>
                                </svg>
                                Additional Information
                            </button>
                        </li>
                    </ul>
                </div>
            }
            <div className="mt-0">
                <div className="tab-content">
                    <SubmitClaimForm setActiveStep={setActiveStep} activeStep={activeStep} setClaimId={setClaimId}
                                     claimId={claimId}/>
                </div>
            </div>
        </section>
    );
};
