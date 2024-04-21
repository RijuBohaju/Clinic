import React, { useState } from "react";
import "./style.scss";

// const FormContainer = ({ children }) => {
//     return <div className="form-container">{children}</div>;
//   };

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form data, like sending it to a backend server
    console.log("Form submitted with data:", { name, email, phone, date, time });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    // Show message
    setShowMessage(true);
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };
  
  return (
    <formcontainer>
        <h2>Book an appointment</h2> 
    <div className="form-container">
    
     
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} placeholder="i.e John Smith" onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} placeholder="i.e johnsmith@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} placeholder="i.e 980000000" onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Preferred Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Preferred Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
    
    </div>
    {showMessage && <p>Booked an appointment successfully!</p>}
    </formcontainer>
  );
};

export default BookingForm;
