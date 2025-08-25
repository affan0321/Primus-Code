import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import VisionSEO from "../SEO/VisionSEO";
import Campaign from "./Campaign";
import Engage from "./Engage";
import HeroPaid from "./HeroPaid";
import OfferPaid from "./OfferPaid";

export default function PageMarketing() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroPaid />
            <Engage />
            <Campaign />
            <OfferPaid />
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