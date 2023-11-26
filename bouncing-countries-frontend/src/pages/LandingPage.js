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
        <Link
          to="/searchcountry"
          className="App-link"
        >
          Go to SearchCountry
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;


// import React from 'react';
// import logo from './logo.svg';
// import Search from './Search'; 

// const LandingPage = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <h1>This is Bouncing countries</h1>
//           <p>Go ahead, bounce a country! What country are you looking for?</p>
//           <Search />
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         ></a>
//       </header>
//     </div>
//   );
// };

// export default LandingPage;
