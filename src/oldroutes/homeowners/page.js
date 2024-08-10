import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {Homeowners} from "@/components/Homeowners/Homeowners";
import {AppDownloadHomeowners} from "@/components/AppDownloadHomeowners/AppDownloadHomeowners";
import {ContactShortForm} from "@/components/ContactShortForm/ContactShortForm";

export default function HomeownersPage() {
    return (
        <>
            <HeaderNav/>
            <Homeowners/>
            <AppDownloadHomeowners/>
            <ContactShortForm/>
            <Footer/>
        </>
    )
}