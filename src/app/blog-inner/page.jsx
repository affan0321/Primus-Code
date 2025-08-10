
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Content from "./Content";
import HeroBlogInner from "./HeroBlogInner";

export default function BlogInner() {
    return (
        <div>
            <Navbar />
            <HeroBlogInner />
            <Content />
            <Footer />
        </div>
    )
}