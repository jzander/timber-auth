import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {AdjustersTabs} from "@/components/AdjustersTabs/AdjustersTabs";
import {Suspense} from "react";

export default function Join() {
    return (
        <>
            <HeaderNav/>
            <Suspense fallback={<div>Loading...</div>}>
                <AdjustersTabs/>
            </Suspense>
            <Footer/>
        </>
    )
}