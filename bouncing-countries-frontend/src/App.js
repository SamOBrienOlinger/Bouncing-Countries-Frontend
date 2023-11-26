import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchCountry from './pages/SearchCountry';

// import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchCountry />} />
      </Routes>

    </Router>
  );
};

export default App;