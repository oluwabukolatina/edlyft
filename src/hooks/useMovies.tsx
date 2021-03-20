import { useState } from 'react';
import moviesData from '../utils/movies.json';
const useMovies = () => {
  const [movies, setMovies] = useState(moviesData);

  return { movies };
};
export default useMovies;
