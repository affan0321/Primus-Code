import Button from "../blogs/Button";
import Cards from "../blogs/Cards";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Button1 from "./Button1";
import HeroSkills from "./HeroSkills";

export default function Skills() {
    return (
        <div>
            <Navbar />
            <HeroSkills />
            <Cards />
            <Button1 />
            <Footer />
        </div>
    )
}