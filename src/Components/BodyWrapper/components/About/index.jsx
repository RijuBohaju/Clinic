import React from "react";
import about from "../../../../images/about.png";
import "./style.scss";
import { useAnimation } from "../../../../Hooks/useAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router";

const CEOWords = () => {
  const ceoRef = React.useRef(null);

  const { opacity } = useAnimation(ceoRef);
  const navigate = useNavigate();

  return (
    <section id="ceo__container">
    <motion.div
      className="ceo__container"
      ref={ceoRef}
      style={{ opacity: opacity }}
    >
      <div>
        <p>About us</p>
        <h1>Unveiling Our Journey</h1>
        <div className="wrapper">
          <div className="image__container">
            <img src={about} alt="about" width={650} height={450} />
          </div>
          <div className="testimonial">
            <h2>
            Polyclinic Name is a leading healthcare provider, dedicated to delivering exceptional medical services with compassion and expertise. Our experienced team of healthcare professionals is committed to providing personalized care tailored to your needs. With a focus on excellence and innovation, we strive to ensure the well-being of our patients and the community we serve.
            </h2>
            <div className="services">
                <div className="service">
                  <h3>1470+</h3>
                  <p>Satisfied Patients</p>
                </div>
                <div className="service">
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            <button
              onClick={() => {
                navigate("/about"), window.scrollTo(0, 0);
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default CEOWords;
