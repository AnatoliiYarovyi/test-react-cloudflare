import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <script 
          defer 
          data-site-id="test-react-cloudflare-production.up.railway.app" 
          src="https://pub-32e9964050ce412b937311b3b21de5ee.r2.dev/tracker.js"> 
        </script>
      </header>
    </div>
  );
}

export default App;
