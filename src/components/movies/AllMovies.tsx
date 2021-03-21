import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import PopularMovies from '../../layouts/PopularMovies';
import { MultimediaProps } from '../../types/MultimediaProps';
import Error from '../shared/Error';
import { ContextType } from '../../types/ContextType';
import Loading from '../shared/Loading';

const AllMovies = () => {
  const { movies, loading, error } = useContext(AppContext) as ContextType;
  const displayMovies = movies.length ? (
    <div className="series">
      {movies.map((movie: MultimediaProps, i: number) => (
        <div data-testid="movie" className="serie" key={i + 1}>
          <img className="movie-img" src={movie.images['Poster Art'].url} key={i + 1} alt="movie poster" />
          <p className="title">{movie.title}</p>
        </div>
      ))}
    </div>
  ) : (
    <p data-testid="none">no movies</p>
  );

  return (
    <>
      <PopularMovies />
      {error && <Error />}
      {loading ? <Loading /> : displayMovies}
    </>
  );
};

export default AllMovies;
