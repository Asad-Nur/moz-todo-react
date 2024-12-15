import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome(props) {
  
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/home'); 
  };

  return (
   <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <header className="header-elements">
        <h1 className='header-text'>{props.subject}'s Web Portfolio 👨🏽‍💻</h1>
        <button
         type="button" 
         className="enter-button"
         onClick={handleEnterClick}
         >
          Click To Enter🔥
        </button>
      </header>
  </>
  
  );
}

export default Welcome;
