import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Pokemon from './Pokemon'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router> 
      <div className="App">
        <Nav/>
        <Switch>
          <Route 
            path="/" 
            exact 
            component={ Home } 
          />
          <Route 
            path="/about" 
            exact 
            component={ About } 
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
