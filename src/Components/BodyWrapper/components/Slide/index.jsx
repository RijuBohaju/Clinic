import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.scss";
import "swiper/swiper-bundle.css"
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Autoplay, Navigation, EffectFade } from "swiper";
import group from "../../../../images/1.png";
import group1 from "../../../../images/two.png";
import { useTransform, motion, useScroll } from "framer-motion";
import { Pagination } from "swiper";


const slidesData = [
  {
    title: "Dr.John Smith",
    img: group,
    description: "Neurologist",
  },
  {
    title: "Dr.Henry Timberlake",
    img: group1,
    description: "Dermatologist",
  },
  {
    title: "Dr.Poetry Timberlake",
    img: group1,
    description: "Dermatologist",
  },
  {
    title: "Dr.Poetry Timberlake",
    img: group1,
    description: "Dermatologist",
  },
  {
    title: "Dr.Poetry Timberlake",
    img: group1,
    description: "Dermatologist",
  },
];
const Card = ({ title, description, img }) => {
    return (
      <div className="card">
        <div className="image-container">
          <img src={img} alt="card-img" />
        </div>
        <div className="content-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

const Slide = () => {
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
    <section id="slide__container">
    <motion.div
      className="slide__container"
      ref={heroRef}
      style={{ opacity: opacity }}
    >
      <Swiper
        modules={[Navigation,Pagination]}
        // effect="fade"
        // navigation
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
          
        // }}
        navigation={{
            clickable: true,
          }}
        pagination={{
            clickable: true,}}  
        slidesPerView={'4'} // Display four images at a time
        spaceBetween={'30'} // Add space between slides
        loop={true}
      >
        {/* {slidesDate.map((data, index) => {
          return ( */}
            {/* <SwiperSlide key={index}>
              <div
                className="slide__swipper__container"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className="content">
                  <motion.h1 className="title">{data.title}</motion.h1>
                  <p>{data.desp}</p>
                  <button>Get In Touch</button>
                </div>
              </div>
              
            </SwiperSlide>
             <SwiperSlide key={index}>
             <div
               className="slide__swipper__container"
               style={{ backgroundImage: `url(${data.img})` }}
             >
               <div className="content">
                 <motion.h1 className="title">{data.title}</motion.h1>
                 <p>{data.desp}</p>
                 <button>Get In Touch</button>
               </div>
             </div>
             
           </SwiperSlide> */}
           
           {/* <SwiperSlide>Slide2</SwiperSlide>
           <SwiperSlide>Slide3</SwiperSlide>
           <SwiperSlide>Slide4</SwiperSlide>
           <SwiperSlide>Slide5</SwiperSlide> */}
          {/* );
        })} */}
        {slidesData.map((data, index) => (
            <SwiperSlide key={index}>
                <Card title={data.title} description={data.descrption} img={data.img} />
            </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
    </section>
  );
};

export default Slide;
