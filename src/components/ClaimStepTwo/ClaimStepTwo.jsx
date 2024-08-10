export const ClaimStepTwo = ({ activeStep, setActiveStep, handleChange, formData, handleSubmit }) => {
    return (
        <section className="py-8 bg-white dark:bg-gray-900 lg:py-0 mx-auto">
            <div className="lg:flex">
                <div className="flex mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0 py:8 lg:py-16 min-h-screen">
                    <div className="w-full">
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-10">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: '40%' }}>&nbsp;
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                                <div>
                                    <label htmlFor="incident-location"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location
                                        of Incident</label>
                                    <input type="text" name="incidentLocation" id="incident-location"
                                           value={formData.incidentLocation}
                                           onChange={(e) => handleChange(e.target.name, e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Location" required />
                                </div>
                                <div>
                                    <label htmlFor="incident-date"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date
                                        of Incident</label>
                                    <input type="date" name="incidentDate" id="incident-date"
                                           value={formData.incidentDate}
                                           onChange={(e) => handleChange(e.target.name, e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           required />
                                </div>
                                <div>
                                    <label htmlFor="incident-time"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time
                                        of Incident</label>
                                    <input type="time" name="incidentTime" id="incident-time"
                                           value={formData.incidentTime}
                                           onChange={(e) => handleChange(e.target.name, e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           required />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="loss-description"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description
                                        of Loss or Damage</label>
                                    <textarea id="loss-description" name="lossDescription" rows="4"
                                              value={formData.lossDescription}
                                              onChange={(e) => handleChange(e.target.name, e.target.value)}
                                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                              placeholder="Provide details of the damage..." required></textarea>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button type="button" onClick={() => setActiveStep(activeStep - 1)}
                                        className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev:
                                    Homeowner Info
                                </button>
                                <button type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next:
                                    Tree Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
