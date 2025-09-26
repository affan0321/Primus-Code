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
import HeroAI from "./HeroAI";
import OfferAI from "./OfferAI";
import StrategyAI from "./StrategyAI";

export default function AI() {
    return (
        <div>
            <Navbar />
            <HeroAI />
            <StrategyAI />
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
