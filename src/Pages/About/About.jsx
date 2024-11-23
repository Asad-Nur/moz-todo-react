import NavBar from "../../Components/NavBar/NavBar";
import './About.css';

const About = () => {
    return (
        <>
        <NavBar />
      <div className="about-page">
        <h1>About</h1>
        <p>This is the About component.</p>
      </div>
      </>
    );
  };
  
  export default About;