import React from 'react';
import logo from './SpaceX-Logo.svg';
import './App.css';
import { Rocket } from './components/spaceX/capsule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
      <Rocket />
    </div>
  );
}

export default App;
