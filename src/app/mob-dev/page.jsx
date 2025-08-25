import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Offer from "../componentes/Offer";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Techstack from "../web-dev/Techstack";
import Vision from "../web-dev/Vision";
import HeroMobDev from "./HeroMobDev";
import Offers from "./Offers";
import ProjectsMob from "./ProjectsMob";
import Visions from "./Visions";

export default function MobDev() {
    return (
        <div>
            <Navbar />
            <HeroMobDev />
            <Visions />
            <Techstack />
            <Offers />
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