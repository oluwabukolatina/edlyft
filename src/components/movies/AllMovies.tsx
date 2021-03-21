import React, { useContext } from 'react';
import Header from '../../layouts/Header';
import { Series } from '../../hooks/useMovies';
import Footer from '../../layouts/Footer';
import AppContext from '../../context/AppContext';
import PopularMovies from '../PopularMovies';

const AllMovies = () => {
  const { movies }: any = useContext(AppContext);
  return (
    <>
      <PopularMovies />
      <div className="series">
        {movies.map((serie: Series, i: number) => (
          <div className="serie" key={i + 1}>
            <img className="movie-img" src={serie.images['Poster Art'].url} key={i + 1} alt="movie poster" />
            <p className="title">{serie.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllMovies;
