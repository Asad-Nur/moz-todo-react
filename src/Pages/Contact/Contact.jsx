import './Contact.css'
import NavBar from "../../Components/NavBar/NavBar";
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <>
        <NavBar />
      <div className= 'contact-text'>
        <div className= 'contact-me'>
        <h1>Contact Me!</h1>
        </div>
        <div className= 'contact-smaller'>
        <p>Feel free to reach out regarding career opportunities or any questions.</p>
        </div>
      </div>
      <ContactForm />
      </>
    );
  };
  
  export default Contact;