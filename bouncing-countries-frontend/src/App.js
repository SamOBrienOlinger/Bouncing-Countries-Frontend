import './App.css';

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div id='globe'>

          
        </div>

          <h1>
            This is Bouncing countries
          </h1>

          <div>
            <p> Bounce offers consultancy that delivers the essesntial answers our clients require immediately </p>

            <p> How? </p>

            <span> 
              <p> By placing their interests at the core of real-time data </p> 
              <p> The advantage they need to excel </p>
            </span>

            <p> Our agile research platform guarantees that brands around the globe find their edge </p>

            <h2> Your knowledge-based decisions begin with Bounce </h2>

            <p> Our knowledge becomes yours </p>

            <p> Together we set your industry's standard can only try to reach </p>

          </div>

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
