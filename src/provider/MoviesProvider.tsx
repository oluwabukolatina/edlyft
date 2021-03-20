import React from 'react';
import AppContext from '../context/AppContext';
import useMovies from '../hooks/useMovies';

const MoviesProvider = ({ children }: any) => {
  const { movies } = useMovies();
  return (
    <AppContext.Provider
      value={{
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default MoviesProvider;
