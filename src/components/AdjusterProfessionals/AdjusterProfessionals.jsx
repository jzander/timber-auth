import {NewClaimCta} from "@/components/NewClaimCta/NewClaimCta";

export const AdjusterProfessionals = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Making the
                        claim process smooth and efficient</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400 lg:px-48">Our production team is trained
                        to use
                        all necessary platforms to communicate with adjusters according to their preferences.
                    </p>
                    <div className="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <div>
                            <div
                                className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100 dark:bg-primary-900">
                                <svg className="mx-auto w-16 h-16 text-primary-600 dark:text-primary-500"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                                          clipRule="evenodd"/>
                                </svg>

                            </div>
                            <h3 className="mb-4 text-2xl font-bold dark:text-white">Fully
                                Credentialed, Certified Professionals</h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">1 Tree Emergency Members are thoroughly
                                vetted, licensed, and insured. They are trained and certified by top industry
                                associations, such as the International Society of Arboriculture and the Tree Care
                                Industry Association.</p>
                        </div>
                        <div>
                            <div
                                className="inline-flex justify-center items-center mb-6 w-24 h-24 bg-purple-100 rounded-lg dark:bg-purple-900">
                                <svg className="mx-auto w-16 h-16 text-purple-600 dark:text-purple-500"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold dark:text-white">Expert Reporting & Integration</h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">We invoice directly through Xactimate®
                                or the handling TPA. Each invoice includes photos, signed Work
                                Authorization/Authorization to Pay forms, Certificates of Satisfaction, and detailed
                                descriptions of the work performed.</p>
                        </div>
                    </div>
                    {/*<p className="text-center">*/}
                    {/*    <a href="#"*/}
                    {/*       className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">*/}
                    {/*        Learn what makes Flowbite different <svg className="ml-1 w-5 h-5" fill="currentColor"*/}
                    {/*                                                 viewBox="0 0 20 20"*/}
                    {/*                                                 xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path fillRule="evenodd"*/}
                    {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                    {/*              clipRule="evenodd"></path>*/}
                    {/*    </svg>*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                </div>
            </section>
            <NewClaimCta/>
        </>
    )
}