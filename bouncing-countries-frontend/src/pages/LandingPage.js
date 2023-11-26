import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bouncing-countries-logo.png';
import Search from '../components/Search';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>This is Bouncing countries</h1>
          <p>Go ahead, bounce a country! What country are you looking for?</p>
          <Search />
        </div>
        <Link to="/search" className="App-link">
  Go to SearchCountry
</Link>
      </header>
    </div>
  );
};

export default LandingPage;