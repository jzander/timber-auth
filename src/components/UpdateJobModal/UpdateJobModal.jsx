export const UpdateJobModal = ({activeJob, setActiveJob}) => {
    const {
        city,
        state,
        zip,
        description,
        id,
    } = activeJob

    const handleBackgroundClick = (e) => {
        // Check if the click is on the background and not inside the modal
        if (e.target.id === "updateProductModal") {
            setActiveJob(null);
        }
    };

    return (
        <>
            <div id="updateProductModal" tabindex="-1" aria-hidden="true" onClick={handleBackgroundClick}
                 class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-75 min-h-screen">
                <div class="relative p-4 w-full max-w-sm h-full max-h-full mx-auto">
                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 pb-20 sm:p-5">
                        <div
                            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Job ID: <span
                                className="bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">#{id}</span>
                            </h3>
                            <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="updateProductModal" onClick={() => setActiveJob(null)}>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className={'grid grid-cols-3'}>
                            <div className="mb-2">
                                <div
                                    className="font-semibold text-gray-900 dark:text-white text-xs">City:
                                </div>
                                <span className={'text-xs'}>
                                        {city}
                                </span>
                            </div>
                            <div className="mb-2">
                                <div
                                    className="font-semibold text-gray-900 dark:text-white text-xs">State:
                                </div>
                                <span className={'text-xs'}>
                                        {state}
                                </span>
                            </div>
                            <div className="mb-2">
                                <div
                                    className="font-semibold text-gray-900 dark:text-white text-xs">Zip:
                                </div>
                                <span className={'text-xs'}>
                                        {zip}
                                </span>
                            </div>
                        </div>
                        <form action="#">
                            <div className="grid gap-4 mb-4">
                                {/*<div>*/}
                                {/*    <label for="name"*/}
                                {/*           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job*/}
                                {/*        Type</label>*/}
                                {/*    <input type="text" name="name" id="name" value="Tree Only"*/}
                                {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                                {/*           placeholder="Tree Only" required=""/>*/}
                                {/*</div>*/}
                                {/*<div><label for="category"*/}
                                {/*            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label><select*/}
                                {/*    id="category"*/}
                                {/*    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">*/}
                                {/*    <option value="Inactive">Inactive</option>*/}
                                {/*    <option value="Progress">In Progress</option>*/}
                                {/*    <option value="Completed">Completed</option>*/}
                                {/*</select></div>*/}
                                <div date-rangepicker datepicker-orientation="top"
                                     className="grid grid-cols-1">
                                    <div className="relative">
                                        <div
                                            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span className={'mt-4'}/>
                                        <div
                                            className="font-semibold text-gray-900 dark:text-white text-xs">
                                        </div>
                                        <input name="start" type="text"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="ETA"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2"><label for="description"
                                                                      class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Description</label><textarea
                                    id="description" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write your description...">{description}</textarea>
                                </div>
                                <div className="mb-2" style={{lineHeight: '15px'}}>
                                    <div
                                        className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Scope of
                                        work:
                                    </div>
                                    <span className={'text-xs'}>
                                        First please enter your ETA so the homeowner and adjuster can see it. When you arrive, please take photos of all the trees on structures. Then, if you are not given the scope of work within a few minutes of sending photos, please call to receive the scope of work
                                </span>
                                </div>
                            </div>
                            {/*<div class="mb-4 space-y-4 sm:flex sm:space-y-0">*/}
                            {/*    <div class="flex items-center mr-4">*/}
                            {/*        <input id="inline-checkbox" type="checkbox" value="" name="sellingType"*/}
                            {/*               class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label for="inline-checkbox"*/}
                            {/*               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In-store*/}
                            {/*            only</label>*/}
                            {/*    </div>*/}
                            {/*    <div class="flex items-center mr-4">*/}
                            {/*        <input id="inline-2-checkbox" type="checkbox" value="" name="sellingType"*/}
                            {/*               class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label for="inline-2-checkbox"*/}
                            {/*               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online*/}
                            {/*            selling*/}
                            {/*            only</label>*/}
                            {/*    </div>*/}
                            {/*    <div class="flex items-center mr-4">*/}
                            {/*        <input checked="" id="inline-checked-checkbox" type="checkbox" value=""*/}
                            {/*               name="sellingType"*/}
                            {/*               class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label for="inline-checked-checkbox"*/}
                            {/*               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Both*/}
                            {/*            in-store*/}
                            {/*            and online</label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div class="mb-4">
                            <span
                                class="block mb-2 font-medium text-gray-900 dark:text-white text-xs">Job Site Images</span>
                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <div
                                        class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700 flex py-7">
                                        <img
                                            className={'object-cover'}
                                            src="/assets/tree4.webp"
                                            alt="iMac Side Image"/>
                                        <button type="button"
                                                class="absolute bottom-1 left-1 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                 viewbox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            <span class="sr-only">Delete image</span>
                                        </button>
                                    </div>
                                    <div
                                        className="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700 flex py-7">
                                        <img
                                            src="/assets/tree2.webp"
                                            alt="iMac Front Image"/>
                                        <button type="button"
                                                class="absolute bottom-1 left-1 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                 viewbox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            <span class="sr-only">Delete image</span>
                                        </button>
                                    </div>
                                    <div
                                        className="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700 flex py-7">
                                        <img
                                            src="/assets/tree5.webp"
                                            alt="iMac Back Image"/>
                                        <button type="button"
                                                class="absolute bottom-1 left-1 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                 viewbox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            <span class="sr-only">Delete image</span>
                                        </button>
                                    </div>
                                    <div
                                        className="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700 flex py-7">
                                        <img
                                            src="/assets/tree1.webp"
                                            alt="iMac Back Image"/>
                                        <button type="button"
                                                class="absolute bottom-1 left-1 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                 viewbox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            <span class="sr-only">Delete image</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center w-full">
                                    <label for="dropzone-file"
                                           class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none"
                                                 stroke="currentColor" viewbox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold">Click to upload</span>&nbsp;
                                                or drag and drop
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                                (MAX.
                                                800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden"/>
                                    </label>
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2 gap-2">
                                <button type="submit"
                                        className="text-white bg-green-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Start
                                    Job
                                </button>
                                <button type="submit"
                                        className="text-white bg-amber-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Pause Job
                                </button>
                                <button type="submit"
                                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Complete
                                </button>
                                <button type="button"
                                        className="items-center justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}