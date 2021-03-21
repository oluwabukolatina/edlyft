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

  return (
    <>
      <PopularSeries />
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        <div className="series">
          {series.map((serie: MultimediaProps, i: number) => (
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

export default AllSeries;
