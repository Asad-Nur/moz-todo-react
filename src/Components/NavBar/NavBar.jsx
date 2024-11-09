import React from 'react';
import './NavBar.css'; // Ensure this file contains the necessary styles
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-wrapper'>
      <img
       className= 'logo'
       src="https://media.istockphoto.com/id/587799996/vector/business-man-working-on-computer.jpg?s=612x612&w=0&k=20&c=cMXCmrlK71dcBJAkzd6AOgAE0GS8DFaxWBldTelfwmE=" 
       alt="React Image"
        />
        <div className='title'>
          <h3>Asad's Portfolio</h3>
        </div>
      <ul className="nav-list">
        <li>
        <Link to="/home" className='link-style'>Home</Link>
          </li>
        <li>
        <Link to="/about" className='link-style'>About</Link>
          </li>
        <li>
        <Link to="/contact" className='link-style'>Contact</Link>
          </li>
        <li>
          <Link to="/projects" className='link-style'>Projects</Link>
          </li>
      </ul>
    </div>
  );
}

export default NavBar;
