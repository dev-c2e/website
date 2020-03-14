import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
        <meta name="description" content="club d'entraide de l'ENI" />
      </Helmet>
      <h2 className="App-logo">C2E</h2>
    </div>
  );
}

export default App;
