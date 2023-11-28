import React from 'react';
import Search from '../components/Search'
import FourSpheres from '../assets/four-corners-globe.jpg'


const SearchCountry = () => {
  return (
    <div>
      
      <a href="https://bounceinsights.com/">
      <div id="four-spheres">
        <img src={FourSpheres}  alt="four spheres" />
      </div>
      </a>
      
      <h1>Search Country Page</h1>

      <div id="search-intro">
        <p> Go ahead, Bounce any country off us for global insights! </p>
        <p> Search below </p>
      </div>
      

      <Search />

    </div>
  );
};

export default SearchCountry;

