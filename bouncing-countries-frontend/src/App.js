import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SearchCountry from './pages/SearchCountry';
// import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      {/* <Switch> */}
        {/* <Route path="/" exact component={LandingPage} /> */}
        {/* <Route path="/search" component={SearchCountry} /> */}
      {/* </Switch> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchCountry />} />
      </Routes>

    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import OtherPage from './pages/OtherPage';
// import Navigation from './components/Navigation';

// import logo from "/workspace/Bouncing-Countries-Frontend/bouncing-countries-frontend/src/assets/bouncing-countries-logo.png";
// import './App.css';

// import Search from "./Search";

// function App() {
//   return (

//     <Router>
//     <div>
//       <Navigation />
//       <Route path="/" exact component={LandingPage} />
//       <Route path="/searchcountry" component={OtherPage} />
//     </div>
//   </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <div>

          
    //     </div>

    //       <h1>
    //         This is Bouncing countries
    //       </h1>

    //       <p>
    //         Go ahead, bounce a country! What country are you looking for?
    //       </p>

    //       <Search />

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     </a>
    //   </header>
    // </div>
  // );
// }

// export default App;
