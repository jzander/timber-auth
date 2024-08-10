export const ClaimStepFive = ({ setActiveStep, activeStep, handleChange, formData, handleSubmit }) => {
    return (
        <section className="py-8 bg-white dark:bg-gray-900 lg:py-0 mx-auto">
            <div className="lg:flex">
                <div className="flex mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0 py:8 lg:py-16 min-h-screen">
                    <div className="w-full">
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-10">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: '98%' }}>&nbsp;
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/*<h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white mt-10">Attachment</h2>*/}
                            {/*<div className="mb-4">*/}
                            {/*    <label htmlFor="dropzone-file"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attach*/}
                            {/*        Photos of Damage</label>*/}
                            {/*    <p className="mb-2 text-sm">Photos of the tree and/or structural damage will help us*/}
                            {/*        better*/}
                            {/*        assess how to handle your claim. If possible, take photos that clearly show not only*/}
                            {/*        the*/}
                            {/*        damage but the surrounding area.</p>*/}
                            {/*    <div className="flex justify-center items-center w-full">*/}
                            {/*        <label htmlFor="dropzone-file"*/}
                            {/*               className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">*/}
                            {/*            <div className="flex flex-col justify-center items-center pt-5 pb-6">*/}
                            {/*                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none"*/}
                            {/*                     stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                            {/*                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>*/}
                            {/*                </svg>*/}
                            {/*                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span*/}
                            {/*                    className="font-semibold">Click to upload</span> or drag and drop</p>*/}
                            {/*                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Max. File Size:*/}
                            {/*                    30MB</p>*/}
                            {/*                <button type="button"*/}
                            {/*                        className="py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Select*/}
                            {/*                    files*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*            <input id="dropzone-file" type="file" className="hidden" />*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white mt-10">Additional
                                Notes</h2>
                            <div className="mb-4">
                                {/*<label htmlFor="additional-notes"*/}
                                {/*       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional*/}
                                {/*    Notes</label>*/}
                                <textarea id="additional-notes" name="additionalNotes" rows="4"
                                          value={formData.additionalNotes}
                                          onChange={(e) => handleChange(e.target.name, e.target.value)}
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Any additional notes..." required></textarea>
                            </div>
                            <div className="flex space-x-3">
                                <button type="button" onClick={() => setActiveStep(activeStep - 1)}
                                        className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev:
                                    Insurance Info
                                </button>
                                <button type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Submit Claim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
