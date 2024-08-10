"use client";
import React, {useState} from "react";
import {Bounce, toast} from "react-toastify";
import {formatPhone} from "../../../utils/formatPhone";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT_URL
export const ContactShortForm = ({onHomepage}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, "name?")
        if (name === 'phoneNumber') {
            return setFormData({...formData, [name]: formatPhone(value)});
        }
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {firstName, lastName, email, phoneNumber, message} = formData;

        const mutation = `
        mutation {
            create_contact_item(data: {
                firstName: "${firstName}",
                lastName: "${lastName}",
                email: "${email}",
                phoneNumber: "${phoneNumber}",
                message: "${message}"
            }) {
                id
                firstName
                lastName
                email
                phoneNumber
                message
            }
        }
    `;

        fetch(`${ENDPOINT_URL}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query: mutation}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errors) {
                    throw new Error("Submission failed");
                }
                toast.success("Message sent successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch(() => {
                toast.error("Submission failed. Please try again.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            });
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Have any additional questions that weren&apos;t answered in our FAQ&apos;s? Reach out and we&apos;ll
                    get back to you right away.
                </p>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-8 p-6 mx-auto mb-8 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-8 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
                    <input type="hidden" name="form-name" value="contact"/>
                    <div hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="first-name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First
                            Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Bonnie"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last
                            Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Green"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone-number"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                            Number</label>
                        <input
                            type="tel"
                            id="phone-number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                        <p className="mt-4 text-sm text-gray-500">
                            By submitting this form you agree to our <a href="#"
                                                                        className="text-primary-600 hover:underline dark:text-primary-500">terms
                            and conditions</a> and our <a href="#"
                                                          className="text-primary-600 hover:underline dark:text-primary-500">privacy
                            policy</a> which explains how we may collect, use and disclose your personal information
                            including to third parties.
                        </p>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        message
                    </button>
                </form>
            </div>
        </section>
    );
};
