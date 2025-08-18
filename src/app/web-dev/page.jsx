import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Craft from "./Craft";
import HeroWebDev from "./HeroWebDev";
import Offering from "./Offering";
import ProjectsWeb from "./ProjectsWeb";
import Techstack from "./Techstack";
import Vision from "./Vision";

export default function Webdev() {
    return (
        <div>
            <Navbar />
            <HeroWebDev />
            <Craft />
            <Techstack />
            <Offering />
            <Vision />
            <ProjectsWeb />
            <Banner />
            <Company />
            <TestimonialSlider />
            <Questions />
            <Build />
            <Footer />
        </div>
    )
}