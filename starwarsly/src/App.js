/**
 * The main App component containing a NavBar and Routes.
 * Note that <App> is wrapped in <Provider> and <PersisteGate>
 * components (see index.js for more details)
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from "./NavBar";
import Routes from "./Routes";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;
