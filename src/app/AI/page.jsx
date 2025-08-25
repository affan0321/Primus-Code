import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Techstack from "../web-dev/Techstack";
import Vision from "../web-dev/Vision";
import AISolutions from "./AISolutions";
import AITool from "./AITool";
import Buisness from "./Buisness";
import HeroAI from "./HeroAI";
import OfferAI from "./OfferAI";

export default function AI() {
    return (
        <div>
            <Navbar />
            <HeroAI />
            <Buisness />
            <Techstack />
            <OfferAI />
            <AITool />
            <AISolutions />
            <Vision />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}