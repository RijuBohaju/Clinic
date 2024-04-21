import React from "react";
import "./style.scss";
import image from "../../../../images/D1.png";
import image2 from "../../../../images/D2.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useAnimation } from "../../../../Hooks/useAnimation";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const firstimageRef = React.useRef(null);
  const secondimageRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const navigate = useNavigate();

  // const { scrollYProgress } = useScroll({
  //   target: firstimageRef,
  //   offset: ["end end", "end start"],
  // });

  // const translate = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  // const translateY = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);

  // const opacity1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  const { opacity } = useAnimation(aboutRef);

  return (
    <section id="about__container">
      <motion.div
        className="about__container"
        ref={aboutRef}
        style={{ opacity: opacity }}
      >
        <div className="wrapper">
          <div className="about">
            <p>Our Doctor</p>
            <h2>Meet Our Marvelous Medical Maestros</h2>
            <div className="text">
             <h1>
              Welcome to{" "}
              <strong>Valley Health Care Service and Training Center!</strong>{" "}
              We are a team of healthcare professionals and educators dedicated
              to providing high-quality healthcare services and training to
              individuals and healthcare organizations.
            </h1>
            </div>

            {/* <p className="donation">What do donations go towards?</p>
          <div className="donation__container">
            <div>
              <p>
                <i className="ri-check-line"></i> Food
              </p>
              <p>
                <i className="ri-check-line"></i> Get Medical Help
              </p>
              <p>
                <i className="ri-check-line"></i> Medical Equipment
              </p>
              <p>
                <i className="ri-check-line"></i> Rent
              </p>
              <p>
                <i className="ri-check-line"></i> Medical Bills
              </p>
            </div>
            <div>
              <p>
                <i className="ri-check-line"></i>Affodable Housing
              </p>
              <p>
                <i className="ri-check-line"></i>Utility Bills
              </p>
              <p>  
                <i className="ri-check-line"></i>Home Energy Bills
              </p>
              <p>
                <i className="ri-check-line"></i>Insurance
              </p>
            </div>
          </div> */}
            <button
              onClick={() => {
                navigate("/about"), window.scrollTo(0, 0);
              }}
            >
              Read More
            </button>
          </div>
          <div className="images">
            <div>
              <motion.div
                ref={firstimageRef}
                transition={{ type: "spring", damping: 0, stiffness: 10 }}
              >
                <img src={image} alt="Doctor1" />
              </motion.div>
              {/* <motion.div ref={firstimageRef} className="overlay-box">
                <h3>Dr.John Smith</h3>
                <p>Neurologist</p>
              </motion.div> */}
              <motion.div ref={secondimageRef}>
                <img
                  src={image2}
                  alt="Doctor2"
                />
              </motion.div>
              {/* <motion.div ref={secondimageRef} className="overlay-box">
                <h3>Dr.John Smith</h3>
                <p>Neurologist</p>
              </motion.div> */}
            </div>
            {/* <div>
            <button>View all cases</button>
          </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
