import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section classname='Contact'>
      <form>
        <div className='input-box'>
          <label className='label'>Full name</label>
          <input type= 'text' className='field' placeholder='Enter your name' required/>
        </div>

        <div className='input-box'>
          <label className='label'>Email address</label>
          <input type= 'text' className='field' placeholder='Enter your email' required/>
        </div>

        <div className='input-box'>
          <label className='label'>Your message</label>
          <textarea className='field message' placeholder='Enter your message' required/>
        </div>

        <button type='submit'>Send message</button>
      </form>
    </section>
  );
};

export default ContactForm;
