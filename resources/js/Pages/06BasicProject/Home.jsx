import Navbar from "@/Components/06basicproject/Home/navbar";
import MovieRow from "@/Components/06basicproject/Home/MovieRow";
import Reasontojoin from "@/Components/06basicproject/Home/Reasontojoin";
import HeroBanner from "@/Components/06basicproject/Home/HeroBanner";
import Footer from "@/Components/06basicproject/Home/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <MovieRow />
            <Reasontojoin />
            <Footer />
        </div>
    );
}