import './Contact.css'
import NavBar from "../../Components/NavBar/NavBar";
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <> 
        <NavBar />
        <div className='contact-container'>
        <div class="absolute inset-0 -z-10 h-full w-full 
      items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      <div className= 'contact-text'>
        <div className= 'contact-me'>
        <h1>Contact Me!</h1>
        </div>
        <div className= 'contact-smaller'>
        <p>Feel free to reach out regarding career opportunities or any questions.</p>
        </div>
      </div>
      <div className='form'>
      <ContactForm />
      </div>
      </div>
      </>
    );
  };
  
  export default Contact;