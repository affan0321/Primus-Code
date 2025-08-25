import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import VisionShopify from "../shopify/VisionShopify";
import ProjectsWeb from "../web-dev/ProjectsWeb";
import HeroStore from "./HeroStore";
import LaunchStore from "./LaunchStore";
import OfferStore from "./OfferStore";
import SolutionsStore from "./SolutionsStore";

export default function Store() {
    return (
        <div>
            <Navbar />
            <HeroStore />
            <LaunchStore />
            <OfferStore />
            <VisionShopify />
            <ProjectsWeb />
             <SolutionsStore /> 
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}