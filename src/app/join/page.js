import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {TabsHeader} from "@/components/TabsHeader/TabsHeader";
import {Suspense} from "react";

export default function Join() {
    return (
        <>
            <HeaderNav/>
            <Suspense fallback={<div>Loading...</div>}>
                <TabsHeader/>
            </Suspense>
            <Footer/>
        </>
    )
}