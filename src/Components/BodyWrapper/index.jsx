import React from "react";
import Doctors from "./components/Doctors";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Blog from "./components/Blog";
import Location from "./components/Location";
import Training from "./components/Training";
import Slide from "./components/Slide"
import FAQ from "./components/FAQ";
import "../../variable.scss";

const BodyWrapper = () => {
  return (
    <div className="bodywrapper__container">
      <Hero />
      <About/>
      <Services />
      <Doctors />
      <Training />
      <Slide />
      <FAQ />
      <Location />
    </div>
  );
};

export default BodyWrapper;
