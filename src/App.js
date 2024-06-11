import "./App.css";
import "./Root.css";
import "./assets/Svgicon";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Future from "./components/Future";
import Understanding from "./components/Understanding";
import DryIce from "./components/DryIce";
import BehindScene from "./components/BehindScene";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";
import Mail from "./components/Mail";
import News from "./components/News";
import Blast from "./components/Blast";
import Faq from "./components/Faq";
import Team from "./components/Team";
import SliderSwiper from "./components/SliderSwiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      once: "true",
      duration: 700,
      easing: "linear",
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <header className="header-bg  min-vh-100 d-flex flex-column justify-content-center">
        <NavBar />
        <Hero />
      </header>
      <Future />
      <Understanding />
      <DryIce />
      <BehindScene />
      <LetsTalk />
      <SliderSwiper />
      <Team />
      <Faq />
      <Blast />
      <News />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
