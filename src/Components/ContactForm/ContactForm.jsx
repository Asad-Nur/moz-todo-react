import React, { useState } from 'react';
import './ContactForm.css';
import greencheck from './FormImages/greencheck.png'; // Assuming you have this image
import redcross from './FormImages/Cross_red_circle.png';

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "64394ffe-acdf-429c-9e1a-08ecd3a1152c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      setIsSuccess(true);
      setShowPopup(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSuccess(false);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 300); 
  };

  return (
    <section className='Contact'>
      <form onSubmit={onSubmit}>
        <div className='input-box'>
          <label className='label'>Full name</label>
          <input
            type='text'
            className='field'
            placeholder='Enter your name'
            name='name'
            required
          />
        </div>

        <div className='input-box'>
          <label className='label'>Email address</label>
          <input
            type='text'
            className='field'
            placeholder='Enter your email'
            name='email'
            required
          />
        </div>

        <div className='input-box'>
          <label className='label'>Your message</label>
          <textarea
            className='field message'
            placeholder='Enter your message'
            name='message'
            required
          />
        </div>

        <button type='submit'>Send message</button>
      </form>
      {showPopup && (
        <div className={`popup ${isClosing ? 'fade-out' : ''}`}>
          <div className='popup-content'>
          {isSuccess ? (
            <img className='green-check' src={greencheck} alt='Success' />
          ) : (
            <img className='red-cross' src={redcross} alt='Error' />
          )}
            <p className='popup-text'>{result}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
