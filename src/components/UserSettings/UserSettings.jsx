export const UserSettings = () => {
    return (
        <section
            class="w-full z-40 w-64 h-screen pt-10 lg:pt-0 transition-transform bg-white border-l border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Profilebar" id="user-drawer">
            <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                <div class="flex flex-col items-center">
                    <img class="w-20 h-20 rounded-full"
                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                         alt="user photo"/>
                    <div class="mt-2 text-center">
                        <h3 class="font-bold text-xl dark:text-white">Alex Sonkin</h3>
                        <p class="dark:text-gray-400">alexsonkin@gmail.com</p>
                    </div>

                    <button type="button"
                            class="my-5 w-full flex items-center justify-center py-1.5 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 dark:text-white mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        Logout
                    </button>

                    <div class="flex items-center justify-center">

                        <button
                            type="button"
                            data-dropdown-toggle="apps-dropdown"
                            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <span class="sr-only">View notifications</span>
                            <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            data-dropdown-toggle="notification-dropdown-sidebar"
                            class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <span class="sr-only">View notifications</span>
                            <svg
                                aria-hidden="true"
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            class="hidden overflow-hidden z-50 w-96 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                            id="notification-dropdown-sidebar"
                        >
                            <div
                                class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
                            >
                                Notifications
                            </div>
                            <div>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                                >
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-11 h-11 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                            alt="Bonnie Green avatar"
                                        />
                                        <div
                                            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-3 h-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                                                ></path>
                                                <path
                                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pl-3 w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                        >
                                            New message from
                                            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-600 dark:text-primary-500"
                                        >
                                            a few moments ago
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                                >
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-11 h-11 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                            alt="Jese Leos avatar"
                                        />
                                        <div
                                            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-3 h-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pl-3 w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                        >
                      <span class="font-semibold text-gray-900 dark:text-white"
                      >Jese leos</span
                      >
                                            and
                                            <span class="font-medium text-gray-900 dark:text-white"
                                            >5 others</span
                                            >
                                            started following you.
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-600 dark:text-primary-500"
                                        >
                                            10 minutes ago
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                                >
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-11 h-11 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                            alt="Joseph McFall avatar"
                                        />
                                        <div
                                            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-3 h-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pl-3 w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                        >
                      <span class="font-semibold text-gray-900 dark:text-white"
                      >Joseph Mcfall</span
                      >
                                            and
                                            <span class="font-medium text-gray-900 dark:text-white"
                                            >141 others</span
                                            >
                                            love your story. See it and view more stories.
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-600 dark:text-primary-500"
                                        >
                                            44 minutes ago
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                                >
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-11 h-11 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                            alt="Roberta Casas image"
                                        />
                                        <div
                                            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-3 h-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pl-3 w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                        >
                      <span class="font-semibold text-gray-900 dark:text-white"
                      >Leslie Livingston</span
                      >
                                            mentioned you in a comment:
                                            <span
                                                class="font-medium text-primary-600 dark:text-primary-500"
                                            >@bonnie.green</span
                                            >
                                            what do you say?
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-600 dark:text-primary-500"
                                        >
                                            1 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                >
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-11 h-11 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                                            alt="Robert image"
                                        />
                                        <div
                                            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-3 h-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pl-3 w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                        >
                      <span class="font-semibold text-gray-900 dark:text-white"
                      >Robert Brown</span
                      >
                                            posted a new video: Glassmorphism - learn how to implement
                                            the new design trend.
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-600 dark:text-primary-500"
                                        >
                                            3 hours ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a
                                href="#"
                                class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                            >
                                <div class="inline-flex items-center">
                                    <svg
                                        aria-hidden="true"
                                        class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    View all
                                </div>
                            </a>
                        </div>

                        <button
                            type="button"
                            data-dropdown-toggle="support-dropdown"
                            class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <span class="sr-only">View support dropdown</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                        <div
                            class="hidden overflow-hidden z-50 w-64 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                            id="support-dropdown">
                            <div
                                class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                                Support
                            </div>
                            <div>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                    <div class="w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                            Learn how to create new projects
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-700 dark:text-primary-400">
                                            Read more &rarr;
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                    <div class="w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                            Invite your coworkers
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-700 dark:text-primary-400">
                                            Read more &rarr;
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                    <div class="w-full">
                                        <div
                                            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                            Become a pro user
                                        </div>
                                        <div
                                            class="text-xs font-medium text-primary-700 dark:text-primary-400">
                                            Read more &rarr;
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a
                                href="#"
                                class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                            >
                                <div class="inline-flex items-center">
                                    <svg class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                                    </svg>
                                    View full docs
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                           class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <span class="ml-3">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                 class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                                    viewBox="0 0 20 20" fill="currentColor"/>
                                    <path
                                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                            </svg>
                            <span class="ml-3">Jobs</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                 class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            <span class="ml-3">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
)
}