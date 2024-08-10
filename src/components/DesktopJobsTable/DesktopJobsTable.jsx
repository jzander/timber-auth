export const DesktopJobsTable = ({jobs, setActiveJob}) => {
    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 hidden md:table">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-3">Job</th>
                    <th scope="col" className="px-4 py-3">Job ID</th>
                    <th scope="col" className="px-4 py-3">Requested</th>
                    <th scope="col" className="px-4 py-3 min-w-[9rem]">Progress</th>
                    <th scope="col" className="px-4 py-3 max-w-[150px]">Address</th>
                    <th scope="col" className="px-4 py-3">Time Tracking</th>
                    <th scope="col" className="px-4 py-3">ETA</th>
                    <th scope="col" className="px-4 py-3">Submitted</th>
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {jobs.map((job) => {
                    const {
                        type,
                        address,
                        city,
                        state,
                        zip,
                        eta,
                        submitted,
                        requested,
                        timeTracking,
                        id,
                        progress
                    } = job
                    return (
                        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700" key={id}
                            onClick={() => setActiveJob(job)}>
                            <th scope="row"
                                className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{type}
                            </th>
                            <td className="px-4 py-2 whitespace-nowrap flex justify-center align-middle items-center h-[50px]">
                                    <span
                                        className="flex bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">#{id}</span>
                                <svg
                                    onClick={() => {navigator.clipboard.writeText(id)}}
                                    aria-hidden="true" className={'text-primary-500'}
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                                </svg>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">{requested}
                            </td>
                            <td className="px-4 py-2 font-medium whitespace-nowrap">
                                <div className="flex justify-end mb-1">
                                        <span
                                            className="text-xs font-medium text-gray-500 dark:text-gray-400">{progress}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div className="bg-primary-600 h-1.5 rounded-full" style={{width: progress}}></div>
                                </div>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[150px] overflow-hidden truncate">
                                {address}, {city}, {state} {zip}
                            </td>
                            <td className="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div
                                    className="px-2 py-1 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center min-w-[135px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"
                                         className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                                    </svg>
                                    <span className="text-green-500">{timeTracking.split('/')[0]}</span>
                                    {timeTracking.includes('/') && '/'}{timeTracking.split('/')[1]}
                                    {timeTracking.includes('/') ? (<button
                                        className="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </button>) : (<button
                                        className="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"/>
                                        </svg>
                                    </button>)}
                                </div>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                                {eta}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">{submitted}
                            </td>
                            <td className="px-4 py-2">
                                <svg className="w-6 h-6 text-primary-600 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}