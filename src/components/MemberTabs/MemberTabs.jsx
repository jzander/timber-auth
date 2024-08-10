
import Link from "next/link";
import {capitalizeEachWord} from "@/app/member-profile/page";
import {useRouter} from "next/navigation";

const svgs = {
    'All Jobs': <svg aria-hidden="true"
                     className="w-4 h-4 mr-2 dark:text-primary-500"
                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"></path>
    </svg>,
    'Unassigned':
        <svg
            className="w-4 h-4 mr-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
            <path fillRule="evenodd"
                  d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                  clipRule="evenodd"/>
            <path
                d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
        </svg>
    ,
    'Active': <svg
        className="w-4 h-4 mr-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
    </svg>,
    'Completed': <svg
        className="w-4 h-4 mr-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd"
              d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
              clipRule="evenodd"/>
    </svg>,
}


export const MemberTabs = ({setActiveTab, activeTab}) => {
    const router = useRouter();

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`?status=${tabName.toLowerCase()}`, undefined, { shallow: true });
    };

    const handleSelectChange = (e) => {
        const selectedTab = e.target.value;
        setActiveTab(selectedTab);
        router.push(`?status=${selectedTab.toLowerCase()}`, undefined, { shallow: true });
    };

    return (
        <section className="flex">
            <div className="w-full max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-white sm:rounded-lg">
                    <div className="px-4 divide-y dark:divide-gray-700">
                        <div
                            className="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                            <div>
                                <h5 className="mb-1 font-semibold dark:text-white">Alex Sonkin</h5>
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="text-sm">New York, United States</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div>
                                    <h5 className="mb-1 text-gray-500 dark:text-gray-400">Pending payments</h5>
                                    <p className="text-lg font-bold text-orange-600">$832</p>
                                </div>
                                <div>
                                    <h5 className="mb-1 text-gray-500 dark:text-gray-400">Received payments</h5>
                                    <p className="text-lg font-bold text-green-500">$1956</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col py-4 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 md:py-0">
                            <select
                                id="list-navigation"
                                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg md:hidden bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={handleSelectChange}
                            >
                                {['All Jobs', 'Unassigned', 'Active', 'Completed'].map((tabName) => {
                                    return (
                                        <option value={tabName} selected={activeTab === tabName} key={tabName}>{capitalizeEachWord(tabName)}</option>
                                    )
                                })}

                            </select>

                            <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
                                {['All Jobs', 'Unassigned', 'Active', 'Completed'].map(tabName => (
                                    <li key={tabName} className="mr-2">
                                        <Link
                                            href={`?status=${tabName.toLowerCase()}`}
                                            className={`inline-flex items-center p-4 border-b rounded-t-lg ${activeTab === tabName ? 'text-primary-600 border-primary-600 active dark:text-primary-500 dark:border-primary-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                                            onClick={() => handleTabClick(tabName)}
                                        >
                                            <span className={activeTab === tabName ? 'text-primary-600' : 'text-gray-400'}>{svgs[tabName]}</span>
                                            {tabName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
