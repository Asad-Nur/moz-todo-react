import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../Components/WelcomeSection/Welcome.jsx'; 
import Home from '../Pages/Home/Home.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Projects from '../Pages/Projects/Projects.jsx';
import './App.css';

function App(props) {
  return (
      
      <Router>
        <Routes>
          <Route path="/" element={<Welcome subject={props.subject} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
