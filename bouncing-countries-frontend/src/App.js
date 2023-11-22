import logo from "/workspace/Bouncing-Countries-Frontend/bouncing-countries-frontend/src/assets/bouncing-countries-logo.png";
import './App.css';

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>

          
        </div>

          <h1>
            This is Bouncing countries
          </h1>

          <p>
            Go ahead, bounce a country! What country are you looking for?
          </p>

          <Search />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
