import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllSeries from './components/series/AllSeries';
import MoviesProvider from './provider/MoviesProvider';
import AllMovies from './components/movies/AllMovies';

const App = () => {
  return (
    <Switch>
      <MoviesProvider>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/series" component={AllSeries} />
          <Route exact path="/movies" component={AllMovies} />
        </div>
      </MoviesProvider>
    </Switch>
  );
};
export default App;
