import { useEffect, useState } from 'react';
import moviesData from '../utils/movies.json';
export interface Series {
  title: string;
  description: string;
  programType: string;
  images: any;
  releaseYear: number;
}
const useMovies = () => {
  const [movies, setMovies] = useState<Series[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
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
