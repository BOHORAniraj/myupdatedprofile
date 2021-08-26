import HeroSection from "../hero/HeroSection";
import react from 'react';
import '../../App.css';
import Cards from "../card/Cards";
import Footer from "../footer/Footer";
import Skill from "../skill/Skill";
import About from "../about/About";

function Home() {
    return(
        <>
        <HeroSection />
        <Skill />
        <Cards/>
        <About />
        <Footer />
        </>
    )
}
export default Home;