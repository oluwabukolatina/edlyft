import React, { useContext } from 'react';
import PopularSeries from '../../layouts/PopularSeries';
import AppContext from '../../context/AppContext';
import { MultimediaProps } from '../../types/MultimediaProps';
import Error from '../shared/Error';
import { ContextType } from '../../types/ContextType';
import Loading from '../shared/Loading';

const AllSeries = () => {
  const { series, loading, error } = useContext(AppContext) as ContextType;
  const displaySeries = series.length ? (
    <div className="series">
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
    </>
  );
};

export default AllSeries;
