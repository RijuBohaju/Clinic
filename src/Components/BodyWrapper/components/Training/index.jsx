// import React from "react";
// import ModelComponent from "../../../Modal";
// import "./style.scss";
// import { motion } from "framer-motion";
// import { useAnimation } from "../../../../Hooks/useAnimation";

// const Training = () => {
//   const [openModal, setOpenModal] = React.useState(false);

//   const modalref = React.useRef(null);
//   const trainingRef = React.useRef(null);

//   const { opacity } = useAnimation(trainingRef);

//   const handleClickOutside = (e) => {
//     if (modalref.current && !modalref.current.contains(e.target)) {
//       setOpenModal(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener("click", handleClickOutside, true);
//     () => {
//       document.removeEventListener("mousedown", handleClickOutside, true);
//     };
//   }, [openModal]);

//   React.useEffect(() => {
//     if (openModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [openModal]);

//   const skills = [
//     {
//       list: "Advanced cardiovascular life support (ACLS).",
//     },
//     {
//       list: "Patient care",
//     },
//     {
//       list: "Critical care",
//     },
//     {
//       list: "Life support",
//     },
//     {
//       list: "Cardiopulmonary resuscitation (CPR)",
//     },
//     {
//       list: "Trauma",
//     },
//     {
//       list: "Pt. /family education and instruction.",
//     },
//     {
//       list: "Telemetry",
//     },
//     {
//       list: "Discharge planning.",
//     },
//   ];

//   const qualities = [
//     "Planning",
//     "Communication",
//     "Critical thinking",
//     "Research",
//     "Computer literacy",
//     "Physical abilities",
//     "Problem solving",
//     "Organization",
//     "Time management",
//   ];

//   return (
//     <section id="training__container">
//       <motion.div
//         className="training__container"
//         style={{ opacity: opacity }}
//       >
//         <div className="wrapper">
//           <h1>Our Training Programs Help You Build Quality</h1>
//           <span></span>
//           <p>
//             3 month Critical Care Training is based in 1month theory plus 2month
//             practical classes fully ICU ward based. By which all nurses, medical
//             person will be fully trained and will know about all settings of ICU
//             ward. After this training you all can easily apply for job after
//             which no nurses have to do volunteer job or observation duties.{" "}
//           </p>

//           <div className="skills__container">
//             <div className="training">
//               <h2>Trainings Provided</h2>
//               <span></span>
//               <div className="skills">
//                 <ul>
//                   {skills.map((skill, index) => {
//                     return (
//                       <div key={index}>
//                         <p>
//                           <i className="ri-check-line"></i>
//                         </p>
//                         <li>{skill.list}</li>
//                       </div>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//             <div className="training">
//               <h2>Qualities developed after training:</h2>
//               <span></span>
//               <div className="skills">
//                 <ul>
//                   {qualities.map((quality, index) => {
//                     return (
//                       <div key={index}>
//                         <p>
//                           <i className="ri-check-line"></i>
//                         </p>
//                         <li>{quality}</li>
//                       </div>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div>
//             <button onClick={() => setOpenModal(true)}>Watch Video</button>
//           </div>
//         </div>
//       </motion.div>
//       {openModal && (
//         <ModelComponent modalref={modalref} setOpenModal={setOpenModal} />
//       )}
//     </section>
//   );
// };

// export default Training;


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
    <section id="training__container">
      <motion.div
        className="training__container"
        ref={serviceRef}
        style={{ opacity: opacity }}
      >
        <div className="wrapper">
          <div className="title__container">
            <p>Why us?</p>
            <h1>Elevate Your Health Experience: Opt for Our Exceptional Services</h1>
            
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
