export const ContactFrom = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-6xl">
                <form action="#">
                    <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                        <div>
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" name="first-name" id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="First Name" required />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" name="last-name" id="last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Last Name" required />
                        </div>
                        <div>
                            <label htmlFor="company-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" name="company-name" id="company-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="tel" name="phone-number" id="phone-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Phone Number" required />
                        </div>
                        <div>
                            <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP Code</label>
                            <input type="text" name="zip" id="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ZIP Code" required />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message" name="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your message here..." required></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="interests" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How can we help you?</label>
                            <select id="interests" name="interests" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Select an option</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white mt-10">Preferred Contact Method</h2>
                    <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center">
                                <input type="radio" id="contact-email" name="contact-method" value="Email" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="contact-email" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input type="radio" id="contact-phone" name="contact-method" value="Phone" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="contact-phone" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                            </div>
                        </div>
                    </div>

                    <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white mt-10">Preferred Contact Time</h2>
                    <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center">
                                <input type="radio" id="time-morning" name="contact-time" value="Morning" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="time-morning" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Morning</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input type="radio" id="time-afternoon" name="contact-time" value="Afternoon" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="time-afternoon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Afternoon</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input type="radio" id="time-evening" name="contact-time" value="Evening" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="time-evening" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Evening</label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center">
                        <input type="checkbox" defaultChecked={true} id="newsletter" name="newsletter" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="newsletter" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subscribe to our newsletter</label>
                    </div>

                    <button type="submit" className="mt-8 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
};
