import React from 'react';
import AppContext from '../context/AppContext';
import useMovies from '../hooks/useMovies';

const MoviesProvider = ({ children }: any) => {
  const { movies, series, loading, getMovies, getSeries, error } = useMovies();
  return (
    <AppContext.Provider
      value={{
        movies,
        series,
        loading,
        getMovies,
        getSeries,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default MoviesProvider;
