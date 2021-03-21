import { useState, useEffect } from 'react';
import { MultimediaProps } from '../components/types/MultimediaProps';

const API_URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSeries = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((movies) => {
        setSeries(movies.entries.filter((serie: MultimediaProps) => serie.programType === 'series'));
        setLoading(false);
      });
  };
  const getMovies = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.entries.filter((movie: MultimediaProps) => movie.programType === 'movie'));
        setLoading(false);
      });
  };

  /**
   * adding this just in case the user goes direct to the route(/series or /movies) instead of clicking on the link from the home page itself.the series and movies page will work without the useeffect
   */
  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  return { movies, series, loading, getMovies, getSeries };
};
export default useMovies;
