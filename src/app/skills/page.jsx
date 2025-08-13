import Button from "../blogs/Button";
import Cards from "../blogs/Cards";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import HeroSkills from "./HeroSkills";

export default function Skills() {
    return (
        <div>
            <Navbar />
            <HeroSkills />
            <Cards />
            <Button />
            <Footer />
        </div>
    )
}