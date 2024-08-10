import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {VisualImageHeader} from "@/components/VisualImageHeader/VisualImageHeader";
import {ContentCardImages} from "@/components/ContentCardImages/ContentCardImages";
import {ImageWithCta} from "@/components/ImageWithCta/ImageWithCta";
import {Footer} from "@/components/Footer/Footer";
import {FaqCols} from "@/components/FaqCols/FaqCols";
import {ContactShortForm} from "@/components/ContactShortForm/ContactShortForm";

export default function Home() {
    return (
        <>
            <HeaderNav/>
            <VisualImageHeader/>
            <ContentCardImages/>
            <ContactShortForm  onHomepage={true}/>
            {/*<AppDownload/>*/}
            <ImageWithCta onHomepage={true}/>
            <FaqCols/>
            <Footer/>
        </>
    );
}
