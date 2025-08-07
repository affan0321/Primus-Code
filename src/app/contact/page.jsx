import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Questions from "../componentes/Questions";
import TestimonialSlider from "../componentes/TestimonialSlider";
import Contacts from "./Contacts";
import HeroContact from "./HeroContact";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <HeroContact />
            <Contacts />
            <TestimonialSlider />
            <Questions />
            <Footer />
        </div>
    )
}