import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import "./style.scss";

const services = [
  {
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "24/7 Availability",
  },
  {
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bonded and qualified care givers",
  },
  {
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Comfort Match Guarantee",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Productive Training",
  },
];

const Services = () => {
  const serviceRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    <section id="services__container">
      <motion.div
        className="services__container"
        ref={serviceRef}
        style={{ opacity: opacity }}
      >
        <div className="wrapper">
          <div className="title__container">
            <p>Our Services</p>
            <h1>Your path to wellness</h1>
            
          </div>
          <div className="services">
            {services.map((service, index) => {
              return (
                <div className="service" key={index}>
                  <div className="img__wrapper">
                    <img
                      src={service.img}
                      alt="unsplash-image"
                      width={"100%"}
                      height={400}
                    />
                  </div>
                  <div className="desp">
                    <h3>{service.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
