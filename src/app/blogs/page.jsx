import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Button from "./Button";
import Cards from "./Cards";
import HeroBlog from "./HeroBlog";

export default function Blogs() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroBlog />
            <Cards />
            <Button />
            <Footer />
        </div>
    )
}