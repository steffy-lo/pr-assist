import React from 'react';
import logo from '../../assets/img/shepherd.png';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Powered by {" "}
          <a
            className="App-link"
            href="https://github.com/shepherd-pro/shepherd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shepherd.js
          </a>
        </p>
      </header>
    </div>
  );
};

export default Popup;
