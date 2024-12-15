import React from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';

import './Home.css';
import face from './Images/my face.png';
import picture from './Images/IMG_3682.jpg';
import {aboutMe} from './text.js';


function Home(props) {
  return (
    <>
    <div className='nav'>
      <NavBar />
      </div>
      <div className="home-page">  
        <div className="inset-0 -z-10 
        items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          
        <img className='face' src={face}></img>
        <header className='welcome-text'>Welcome!</header>
        <div className='hero-section'>
          <div className='left-hero'>
            <h1 className='hello-visitor'>Hello Visitor!</h1>
            <p className='about-me'>{aboutMe}</p>
            </div>
            <div className='right-hero'>
              <img className='selfie' src={picture}></img>
            </div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-header'>Experience</div>
            <div className="experience-section">
              <div className="experience-item">
                <div className="experience-date">Incoming Summer 2025</div>
              <div className="experience-details">
                <h3 className="company-name">Atlassian</h3>
                <p className="role-description">
                  Incoming Full time Software Engineer at Atlassian
                </p>
              </div>
            </div>
          <div className="experience-item">
            <div className="experience-date">Jun 2024 - Sep 2024</div>
            <div className="experience-details">
              <h3 className="company-name">Atlassian (Intern) </h3>
                <p className="role-description">
                Developed and deployed criterion name feature for compass scorecards, 
                as requested by a large multinational home improvement retailer, 
                significantly improving flexibility, and optimizing workflow. Leveraged 
                Postgres for database migration, Kotlin for backend enhancements, and 
                GraphQL, testing queries via Insomnia API.
                <br/><br/>
                Engineered frontend for criterion name feature using React, TypeScript, 
                CSS, and Atlaskit components, ensuring seamless user experience. Implemented 
                extensive tests, including unit, integration, and Cypress.io tests, enabling 
                smooth feature-flagged rollouts to staging and production environments.
                <br/><br/>
                Built and maintained automated UI checks for Compass components using 
                JavaScript to support a 99.9% uptime SLA goal. Debugged and fixed key issues 
                that boosted reliability from below 90% to between 99.9-100%, significantly 
                improving product performance and user satisfaction.
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
