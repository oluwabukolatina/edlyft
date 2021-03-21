import React, { useContext } from 'react';
import PopularSeries from '../PopularSeries';
import Footer from '../../layouts/Footer';
import AppContext from '../../context/AppContext';
import { MultimediaProps } from '../../types/MultimediaProps';
import Loading from '../Loading';
import Error from '../Error';
import { ContextType } from '../../types/ContextType';

const AllSeries = () => {
  const { series, loading, error } = useContext(AppContext) as ContextType;
  const displaySeries = series.length ? (
    <div className="series" data-testid="all-series">
      {series.map((serie: MultimediaProps, i: number) => (
        <div data-testid="serie" className="serie" key={i + 1}>
          <img className="movie-img" src={serie.images['Poster Art'].url} key={i + 1} alt="movie poster" />
          <p className="title">{serie.title}</p>
        </div>
      ))}
    </div>
  ) : (
    <p data-testid="none">no series</p>
  );

  return (
    <>
      <PopularSeries />
      {error && <Error />}
      {loading ? <Loading /> : displaySeries}
      <Footer />
    </>
  );
};

export default AllSeries;
