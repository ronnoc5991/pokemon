import React from 'react';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Home from './Home';
import Search from './Search';
import PokemonDetail from './PokemonDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router> 
      <div className="App">
        <Nav/>
        <Intro/>
        <Switch>
          <Route 
            path="/pokemon/" 
            exact 
            component={ Home } 
          />
           <Route
            path="/pokemon/search"
            exact
            component= { Search }
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
