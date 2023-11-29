import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bounce-planet.jpg';
import styles from '../styles/Button.module.css';


const LandingPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src={logo} id="globe" alt="Bouncing Countries Logo" />
        </div>
        
        <div id="landing-div">
          <h1>This is Bouncing countries</h1>

          <div>
            <div>
              <p>Bounce offers our clients the essential answers they need now in order to create, sustain and enhance their edge </p>
            </div>
        </div>

        <div>
          <h2> How? </h2>

        <div>
          <p>Our Knolwedge becomes your Knolwedge</p>
          <p> Our agile research platform combines real-time data with our clients' global goals </p>
        </div>
        
        <div>
          <h3>Your knowledge-based and data-driven decision-making begins with Bounce</h3>

            <p> Find the International Information your Organisation needs to Excel</p>
            <p> Bounce any Country for that Data Now </p>
        </div>
          
        </div>
          <div className={styles['elementor-button-wrapper']}>
            <Link to="/search" className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}>
              <span className={styles['elementor-button-content-wrapper']}>
                <span className={styles['elementor-button-text']}> Click Here </span>
              </span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
