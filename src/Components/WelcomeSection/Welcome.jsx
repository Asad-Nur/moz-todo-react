import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome(props) {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="container">
      <header className="header-elements">
        <h1>{props.subject}'s Web Portfolio 👨🏽‍💻</h1>
        <button
         type="button" 
         className="enter-button"
         onClick={handleEnterClick}
         >
          Click To Enter🔥
        </button>
      </header>
    </div>
  );
}

export default Welcome;
