import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <h1>Country Music Lyrics</h1>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
