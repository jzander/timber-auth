export const MobileJobsLayout = ({setActiveJob, jobs}) => {
    return (
        <>
            <div className="grid gap-4 bg-gray-100">
                {jobs.map(({
                               address,
                               city,
                               state,
                               zip,
                               eta,
                               description,
                               submitted,
                               requested,
                               timeTracking,
                               id,
                               progress
                           }) => {
                    return (
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md" key={id}>
                            <div className={'absolute right-3'} onClick={() => setActiveJob(jobs[0])}>
                                <svg className="w-6 h-6 text-primary-500 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                            </div>

                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <div className="mb-2">
                                    <div
                                        className="font-semibold text-gray-900 dark:text-white">Job ID: <span
                                        className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-1">#{id}</span>
                                    </div>

                                </div>
                                <div className="mb-2">
                                    <div
                                        className="font-semibold text-gray-900 dark:text-white">Address:
                                    </div>
                                    {address}<br/>
                                    {city}, {state} {zip}
                                </div>
                                <div className={'grid grid-cols-2'}>
                                    <div className="mb-2">
                                        <div
                                            className="font-semibold text-gray-900 dark:text-white">Time Tracking:
                                        </div>
                                        {timeTracking}
                                    </div>
                                    <div className="mb-2">
                                            <span
                                                className="font-semibold text-gray-900 dark:text-white">ETA:</span>
                                        <div>
                                            {eta}
                                        </div>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-2'}>
                                    <div className="mb-2">
                                        <div
                                            className="font-semibold text-gray-900 dark:text-white">Requested:
                                        </div>
                                        {requested}
                                    </div>
                                    <div className="mb-2">
                                        <div
                                            className="font-semibold text-gray-900 dark:text-white">Submitted:
                                        </div>
                                        {submitted}
                                    </div>
                                </div>
                                <div className="mb-2">
                                            <span
                                                className="font-semibold text-gray-900 dark:text-white">Description:</span>
                                    <div>
                                        {description}
                                    </div>

                                </div>
                                <div className="mb-2">
                                            <span
                                                className="font-semibold text-gray-900 dark:text-white">Progress:</span>

                                    <span className={'min-w-36 flex items-center'}>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-3">
                                        <div className={progress === '100%' ? 'bg-green-600 h-1.5 rounded-full' : 'bg-primary-600 h-1.5 rounded-full'}
                                             style={{width: progress}}></div>
                                    </div>
                                            </span>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}