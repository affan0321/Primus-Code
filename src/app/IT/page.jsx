import Banner from "../componentes/Banner";
import Build from "../componentes/Build";
import Company from "../componentes/Company";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import HeroIT from "./HeroIT";
import ITVision from "./ITVision";
import Problems from "./Problems";
import Services from "./Services";
import Talent from "./Talent";

export default function IT() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroIT />
            <Talent />
            <Problems />
            <Services />
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