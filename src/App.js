import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={AllBeers} />
        <Route path="/beers/:beerId" component={SingleBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
