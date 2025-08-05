import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Offer from "../componentes/Offer";
import Partner from "../componentes/Partner";
import Questions from "../componentes/Questions";
import Core from "./Core";
import HeroAbout from "./HeroAbout";

export default function AboutUs() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroAbout />
            <Partner reverse={true} />
            {/* <Core /> */}
            <Banner />
            <Offer />
            <Questions />
            <Footer />
        </div>
    )
}