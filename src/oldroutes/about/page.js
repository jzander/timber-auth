import {HeaderNav} from "@/components/HeaderNav/HeaderNav";
import {Footer} from "@/components/Footer/Footer";
import {HeroWithImage} from "@/components/HeroWithImage/HeroWithImage";
import {SocialProfContent} from "@/components/SocialProfContent/SocialProfContent";
import {CtaSectionWithTabs} from "@/components/CtaSectionWithTabs/CtaSectionWithTabs";
import {CenteredHeroSection} from "@/components/CenteredHeroSection/CenteredHeroSection";

export default function About() {
    return (
        <>
            <HeaderNav/>
            <HeroWithImage/>
            <CtaSectionWithTabs/>
            <SocialProfContent/>
            <CenteredHeroSection/>
            <Footer/>
        </>
    )
}