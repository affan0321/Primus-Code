import Navbar from "../componentes/Navbar";
import Craft from "./Craft";
import HeroWebDev from "./HeroWebDev";
import Techstack from "./Techstack";

export default function Webdev() {
    return (
        <div>
            <Navbar />
            <HeroWebDev />
            <Craft />
            <Techstack />
        </div>
    )
}