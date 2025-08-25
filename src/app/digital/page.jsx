import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import ITVision from "../IT/ITVision";
import HeroDigital from "./HeroDigital";
import ProblemsDigital from "./ProblemsDigital";
import ServicesDigital from "./ServicesDigital";
import TalentDigital from "./TalentDigital";

export default function Digital() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroDigital />
            <TalentDigital />
            <ProblemsDigital />
            <ServicesDigital />
            <ITVision/>
            <Banner/>
            <Company/>
            <TestimonialSlider/>
            <Questions/>
            <Build/>
            <Footer/>
        </div>
    )
}