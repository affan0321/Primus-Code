import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Solutions from "../software-dev/Solutions";
import ProjectsWeb from "../web-dev/ProjectsWeb";
import HeroShopify from "./HeroShopify";
import Launch from "./Launch";
import OfferShopify from "./OfferShopify";
import SolutionsShopify from "./SolutionsShopify";
import VisionShopify from "./VisionShopify";

export default function Shopify() {
    return (
        <div>
            <Navbar />
            <HeroShopify />
            <Launch />
            <OfferShopify />
            <VisionShopify />
            <ProjectsWeb />
            <SolutionsShopify />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}