import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllSeries from './components/series/AllSeries';
import MoviesProvider from './provider/AppProvider';
import AllMovies from './components/movies/AllMovies';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <Switch>
      <MoviesProvider>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/series" component={AllSeries} />
          <Route exact path="/movies" component={AllMovies} />
          <Footer />
        </div>
      </MoviesProvider>
    </Switch>
  );
};
export default App;
