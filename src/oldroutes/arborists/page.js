import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {Arborists} from "@/components/Arborists/Arborists";
import {ContactShortForm} from "@/components/ContactShortForm/ContactShortForm";
import {ArboristsBenefits} from "@/components/ArboristsBenefits/ArboristsBenefits";
import {AppDownloadArborists} from "@/components/AppDownloadArborists/AppDownloadArborists";

export default function ArboristsPage() {
    return (
        <>
            <HeaderNav/>
            <Arborists/>
            <ArboristsBenefits/>
            <AppDownloadArborists/>
            <ContactShortForm/>
            <Footer/>
        </>
    )
}