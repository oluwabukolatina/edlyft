import React, { useContext } from 'react';
import Footer from '../../layouts/Footer';
import AppContext from '../../context/AppContext';
import PopularMovies from '../PopularMovies';
import { MultimediaProps } from '../types/MultimediaProps';
import Loading from '../Loading';

const AllMovies = () => {
  const { movies, loading }: any = useContext(AppContext);
  return (
    <>
      <PopularMovies />
      {loading ? (
        <Loading />
      ) : (
        <div className="series">
          {movies.map((serie: MultimediaProps, i: number) => (
            <div className="serie" key={i + 1}>
              <img className="movie-img" src={serie.images['Poster Art'].url} key={i + 1} alt="movie poster" />
              <p className="title">{serie.title}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default AllMovies;
