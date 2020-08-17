import React from 'react';
import './App.css';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PokemonDetail from './PokemonDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router> 
      <div className="App">
        <Nav/>
        <Switch>
          <Route 
            path="/pokemon/" 
            exact 
            component={ Home } 
          />
          <Route 
            path="/pokemon/about" 
            exact 
            component={ About } 
          />
          <Route
            path="/pokemon/:id"
            exact
            component= { PokemonDetail }
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
