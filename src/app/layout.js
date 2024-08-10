import {Inter} from "next/font/google";
import "./globals.css";
import {Flowbite, ThemeModeScript} from "flowbite-react";
import Script from "next/script";
import {flowbiteTheme} from "@/utils/theme";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "1 Tree Emergency | 24 Hour Emergency Tree Service & Insurance Coverage Network",
    description: "Swift, professional tree care around the clock, ensuring safety and peace of mind. We make the insurance claim process seamless and affordable.",
    alternates: {
        canonical: `${process.env.WEBSITE_URL}`,
    },
};

export default function RootLayout({children}) {
    return (
        <html lang={"en"}>
        <head>
            <Script src={'./flowbite.min.js'}/>
            <ThemeModeScript/>
        </head>
        <body>
        <Flowbite theme={{theme: flowbiteTheme}}>{children}</Flowbite>
        <ToastContainer/>
        </body>
        </html>
    );
}
