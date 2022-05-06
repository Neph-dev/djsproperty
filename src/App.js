import React, { useState } from 'react';

import { HelmetProvider } from 'react-helmet-async';

import './App.css';

import Router from './Router/Router';

function App() {

  return (
    <div className="App">
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </div>
  );
}

export default App;
