import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllSeries from './components/AllSeries';
import MoviesProvider from './provider/MoviesProvider';

const App = () => {
  return (
    <Switch>
      <MoviesProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/series" component={AllSeries} />
      </MoviesProvider>
    </Switch>
  );
};
export default App;
