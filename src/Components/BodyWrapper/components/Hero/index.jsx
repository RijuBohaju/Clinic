import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.scss";
import { Autoplay, Navigation, EffectFade } from "swiper";
import group from "../../../../images/1.png";
import group1 from "../../../../images/two.png";
import { useTransform, motion, useScroll } from "framer-motion";

const slidesDate = [
  {
    title: "Polyclinic",
    img: group,
    desp: "Welcome to our health center, Healthy Horizons!",
  },
  {
    title: "Comprehensive Care",
    img: group1,
    desp: "Polyclinic encompasses a holistic approach to healthcare that addresses all aspects of an individual's health and wellness.",
  },
];

const Hero = () => {
  // const titleRef = React.useRef(null);
  // const desp = React.useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: titleRef,
  // });
  // const translateY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  const heroRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    <section id="hero__container">
    <motion.div
      className="hero__container"
      ref={heroRef}
      style={{ opacity: opacity }}
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slidesDate.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="hero__swipper__container"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className="content">
                  <motion.h1 className="title">{data.title}</motion.h1>
                  <p>{data.desp}</p>
                  <button>Get In Touch</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
    </section>
  );
};

export default Hero;