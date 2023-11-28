import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bounce-planet.jpg';
import styles from '../styles/Button.module.css'

const LandingPage = () => {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="landing-div">
          <h1>This is Bouncing countries</h1>

          <div>
            <p>Bounce offers consultancy that delivers the essential answers our clients require immediately</p>

            <p>How?</p>

            <div>
              <p>By placing their interests at the core of real-time data</p>
              <p>The advantage they need to excel</p>
            </div>

            <p>Our agile research platform guarantees that brands around the globe find their edge</p>

            <h2>Your knowledge-based decisions begin with Bounce</h2>

            <p>Our knowledge becomes yours</p>

            <p>Together we set your industry's standard can only try to reach</p>
          </div>

          <p>Go ahead, bounce a country! What country are you looking for?</p>
        </div>
        {/* <Link to="/search" className="App-link">
          Go to SearchCountry
        </Link> */}

        <div className={styles['elementor-button-wrapper']}>
          <Link to="/search" className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}>
            <span className={styles['elementor-button-content-wrapper']}>
              <span className={styles['elementor-button-text']}>Go to SearchCountry</span>
            </span>
          </Link>
        </div>

      </header>
    </div>
  );
};

export default LandingPage;
