import React from "react";
import { motion } from "framer-motion";

const Cart = ({ icon, title, description }) => {
  return (
    <div className="cart">
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default Cart;
