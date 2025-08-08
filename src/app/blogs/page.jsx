import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Card from "./Card";
import CustomCard from "./CustomCard";
import HeroBlog from "./HeroBlog";

export default function Blogs() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroBlog />
            <Card />
            {/* <CustomCard /> */}
            <Footer />
        </div>
    )
}