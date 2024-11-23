import React from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import './Home.css';


function Home(props) {
  return (
    <>
      <NavBar />
      <div className="home-page">
        <h1 className='welcome-text'>
          Welcome!
        </h1>
      </div>
    </>
  );
}

export default Home;
