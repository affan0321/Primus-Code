import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Growth from "./Growth";
import HeroSeo from "./HeroSeo";
import OfferSEO from "./OfferSEO";
import Performance from "./Performance";
import VisionSEO from "./VisionSEO";

export default function SEO() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroSeo />
            <Performance />
            <Growth />
            <OfferSEO />
            <VisionSEO />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}