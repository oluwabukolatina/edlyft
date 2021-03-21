import React, { useContext } from 'react';
import Header from '../../layouts/Header';
import PopularSeries from '../PopularSeries';
import Footer from '../../layouts/Footer';
import AppContext from '../../context/AppContext';
import { Series } from '../../hooks/useMovies';

const AllSeries = () => {
  const { series }: any = useContext(AppContext);

  return (
    <>
      <PopularSeries />
      <div className="series">
        {series.map((serie: Series, i: number) => (
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

export default AllSeries;
