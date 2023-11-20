import logo from './logo.svg';
import './App.css';

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>
        </p>

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
