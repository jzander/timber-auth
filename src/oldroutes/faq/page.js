import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {FaqCols} from "@/components/FaqCols/FaqCols";

export default function Page() {
    return (
        <>
            <HeaderNav/>
            <FaqCols useH1={true}/>
            <Footer/>
        </>

    )
}