import React, { useContext } from 'react';
import Footer from '../../layouts/Footer';
import AppContext from '../../context/AppContext';
import PopularMovies from '../PopularMovies';
import { MultimediaProps } from '../../types/MultimediaProps';
import Loading from '../Loading';
import Error from '../Error';
import { ContextType } from '../../types/ContextType';

const AllMovies = () => {
  const { movies, loading, error } = useContext(AppContext) as ContextType;
  const displayMovies = movies.length ? (
    <div className="series">
      {movies.map((movie: MultimediaProps, i: number) => (
        <div data-testid="movie" className="movie" key={i + 1}>
          <img className="movie-img" src={movie.images['Poster Art'].url} key={i + 1} alt="movie poster" />
          <p className="title">{movie.title}</p>
        </div>
      ))}
    </div>
  ) : (
    <p data-testid="none">no movies</p>
  );

  return (
    <p>
      <PopularMovies />
      {error && <Error />}
      {loading ? <Loading /> : displayMovies}
      <Footer />
    </p>
  );
};

export default AllMovies;
