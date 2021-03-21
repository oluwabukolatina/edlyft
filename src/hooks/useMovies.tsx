import { useState, useEffect } from 'react';
import { MultimediaProps } from '../types/MultimediaProps';

const API_URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getSeries = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((movies) => {
        setSeries(
          movies.entries
            .filter((serie: MultimediaProps) => serie.programType === 'series' && serie.releaseYear >= 2010)
            .slice(0, 21)
            .sort(function (a: { title: number }, b: { title: number }) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            }),
        );
        setLoading(false);
      })
      .catch(() => setError(true));
  };
  const getMovies = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((movies) => {
        setMovies(
          movies.entries
            .filter((movie: MultimediaProps) => movie.programType === 'movie' && movie.releaseYear >= 2010)
            .slice(0, 21)
            .sort(function (a: { title: number }, b: { title: number }) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            }),
        );
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  /**
   * adding this just in case the user goes direct to the route(/series or /movies) instead of clicking on the link from the home page itself.the series and movies page will work without the useeffect
   */
  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  return { movies, series, loading, getMovies, getSeries, error };
};
export default useMovies;
