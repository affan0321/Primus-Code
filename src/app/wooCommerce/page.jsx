import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import VisionShopify from "../shopify/VisionShopify";
import ProjectsWeb from "../web-dev/ProjectsWeb";
import HeroWoo from "./HeroWoo";
import LaunchWoo from "./LaunchWoo";
import OfferWoo from "./OfferWoo";
import WooSolutions from "./WooSolutions";

export default function WooCommerce() {
    return (
        <div>
            <Navbar />
            <HeroWoo />
            <LaunchWoo />
            <OfferWoo />
            <VisionShopify />
            <ProjectsWeb />
            <WooSolutions />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}