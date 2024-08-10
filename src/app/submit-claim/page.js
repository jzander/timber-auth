import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {ClaimTabsHeader} from "@/components/ClaimTabsHeader/ClaimTabsHeader";
import {Suspense} from "react";
import {LoadingSpinner} from "@/components/Loading/LoadingSpinner";

export default function ClaimForm() {
    return (
        <>
            <HeaderNav/>
            <Suspense fallback={<LoadingSpinner/>}>
                <ClaimTabsHeader/>
            </Suspense>
            <Footer/>
        </>
    )
}