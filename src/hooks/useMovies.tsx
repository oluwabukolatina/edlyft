import { useState } from 'react';
import { MultimediaProps } from '../components/types/MultimediaProps';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSeries = () => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then((response) => response.json())
      .then((movies) => {
        setSeries(movies.entries.filter((serie: MultimediaProps) => serie.programType === 'series'));
        setLoading(false);
      });
  };
  const getMovies = () => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.entries.filter((movie: MultimediaProps) => movie.programType === 'movie'));
        setLoading(false);
      });
  };

  return { movies, series, loading, getMovies, getSeries };
};
export default useMovies;
