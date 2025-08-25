import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import ProjectsMob from "../mob-dev/ProjectsMob";
import Techstack from "../web-dev/Techstack";
import Vision from "../web-dev/Vision";
import HeroSoftware from "./HeroSoftware";
import OffersSoft from "./OffersSoft";
import Software from "./Software";
import Solutions from "./Solutions";
import Tool from "./Tool";

export default function SoftwareDev() {
    return (
        <div>
            <Navbar />
            <HeroSoftware />
            <Software />
            <Techstack />
            <OffersSoft />
            <Tool />
            <Solutions />
            <Vision />
            <ProjectsMob />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />

        </div>
    )
}