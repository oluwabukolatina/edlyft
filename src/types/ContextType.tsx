import { MultimediaProps } from './MultimediaProps';

export type ContextType = {
  movies: MultimediaProps[];
  series: MultimediaProps[];
  loading: boolean;
  error: boolean;
  getMovies: () => void;
  getSeries: () => void;
};
