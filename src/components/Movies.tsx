import React from 'react';
import MoviesProvider from '../provider/MoviesProvider';
import Series from './series/Series';
import Movie from './movies/Movie';

const Movies = () => {
  return (
    <div className="movies">
      <MoviesProvider>
        <Series />
        <Movie />
      </MoviesProvider>
    </div>
  );
};

export default Movies;
