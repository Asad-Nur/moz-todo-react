import React from 'react';
import './NavBar.css'; // Ensure this file contains the necessary styles
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-wrapper'>
      
      <h3 className='title'>Asad's Portfolio</h3>
       
      <ul className="nav-list">
        <li><Link to="/home" className='link-style'>Home</Link></li>  
        <li><Link to="/contact" className='link-style'>Contact</Link></li>
        <li><Link to="/projects" className='link-style'>Projects</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
