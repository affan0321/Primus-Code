import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Content from "./Content";
import Details from "./Details";
import SkillsInnerHero from "./SkillsInnerHero";

export default function SkillsInner() {
    return (
        <div>
            <Navbar />
            <SkillsInnerHero />
            <Details />
            <Content />
            <Footer />
        </div>
    )
}