import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import ITVision from "../IT/ITVision";
import Talent from "../IT/Talent";
import HeroUI from "./HeroUI";
import ServicesUI from "./ServicesUI";
import TalentUI from "./TalentUI";
import Shapes from "./TalentUI";
import UIProblems from "./UIProblems";

export default function UI() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroUI />
            <TalentUI />
            <UIProblems />
            <ServicesUI />
            <ITVision />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}