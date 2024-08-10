import {ContactFrom} from "@/components/ContactForm/ContactFrom";
import Link from "next/link";

export const ContactSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="grid gap-16 lg:grid-cols-3">
                    <div className="hidden lg:block">
                        <Link href="tel:8663207003"
                           className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                           role="alert">
                            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">24-Hour Service</span>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg>
                        </Link>
                        <Link href="tel:8663207003">
                            <div
                                className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">(866)
                                320-7003
                            </div>
                        </Link>
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Information & Sales</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">info@1treeemergency.com</a></p>*/}
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Support</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">support@1treeemergency.com</a></p>*/}
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Members Inquiries</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">members@1treeemergency.com</a></p>*/}
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Insurance Adjusters*/}
                        {/*    Inquiries</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">claims@1treeemergency.com</a></p>*/}
                        <h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">General Inquiries</h4>
                        <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link
                            href="mailto:info@1treeemergency.com">info@1treeemergency.com</Link></p>
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Event Inquiries</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">events@1treeemergency.com</a></p>*/}
                        {/*<h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Employment Inquiries</h4>*/}
                        {/*<p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a*/}
                        {/*    href="#">careers@1treeemergency.com</a></p>*/}
                    </div>
                    <div className="col-span-2">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">Contact
                            Us</h2>
                        <ContactFrom/>
                    </div>
                </div>
            </div>
        </section>
    )
}