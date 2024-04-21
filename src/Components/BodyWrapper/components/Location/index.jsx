import React from "react";
import "./style.scss";

const Location = () => {
  return (
    <section className="contact__container" id="contact__container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2132631412164!2d85.32730017610695!3d27.67980277619843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ca771e9e55%3A0xc94f84d1f057520f!2sNagarjuna%20College%20of%20IT!5e0!3m2!1sen!2snp!4v1713506329056!5m2!1sen!2snp" 
        
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
