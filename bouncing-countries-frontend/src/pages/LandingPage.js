import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bouncing-countries-logo.png';
// import Search from '../components/Search';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
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
        <Link to="/search" className="App-link">
          Go to SearchCountry
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;
