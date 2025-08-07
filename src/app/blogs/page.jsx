import Navbar from "../componentes/Navbar";
import Card from "./Card";
import HeroBlog from "./HeroBlog";

export default function Blogs() {
    return (
        <div>
            <Navbar variant="dark" />
            <HeroBlog />
            <Card />
        </div>
    )
}