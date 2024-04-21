import React from "react";
import "./style.scss";
import logo from "../../images/dummy.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div>
        <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <h1>Polyclinic</h1>
          <p>
            Welcome to{" "}
            <strong>Polyclinic!</strong> Our dedicated team provides personalized care for your well-being. Step into a welcoming environment where every visit feels like home.
          </p>
          
        </div>
        <div className="links">
          <h1>Links</h1>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
          <p>
            <a href="/about">Doctors</a>
          </p>
        </div>
        <div className="contact__info">
          <h1>Contact Info</h1>
          <p>
            Address: <span>Shankhamul,Lalitpur</span>{" "}
          </p>
          <p>
            Phone: <span>01-5201565</span>{" "}
          </p>
          <p>
            Email: <span>polyclinic@gmail.com</span>{" "}
          </p>
        </div>
        
        {/* <div>
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam?
          </p>
          <div className="buttons">
            <input type="email" name="" id="" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div> */}
      </div>
      <div className="copyright">
        <p> Copyright &copy; 2023 Polyclinic. All Rights Reserved
          {/* Copyright &copy; 2023 All Rights Reserved | Made with{" "}
          <i className="ri-heart-line"></i> by{" "}
          <a href="https://codewithsudeep.com/">CodeWithSudeep</a> */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
