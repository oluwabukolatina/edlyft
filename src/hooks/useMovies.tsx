import { useEffect, useState } from 'react';
import { MultimediaProps } from '../components/types/MultimediaProps';
import moviesData from '../utils/movies.json';

const useMovies = () => {
  const [movies, setMovies] = useState<MultimediaProps[]>([]);
  const [series, setSeries] = useState<MultimediaProps[]>([]);
  const getSeries = () => {
    setSeries(moviesData.entries.filter((param) => param.programType === 'series'));
  };
  const getMovies = () => {
    setMovies(moviesData.entries.filter((param) => param.programType === 'movie'));
  };

  useEffect(() => {
    getSeries();
    getMovies();
  }, []);

  return { movies, series };
};
export default useMovies;
