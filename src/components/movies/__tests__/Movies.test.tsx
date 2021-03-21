import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MoviesProvider from '../../../provider/MoviesProvider';
import '@testing-library/jest-dom/extend-expect';
import AllMovies from '../AllMovies';
import AppContext from '../../../context/AppContext';

describe('app', () => {
  const history = createMemoryHistory();
  it('should show loading', async () => {
    render(
      <Router history={history}>
        <MoviesProvider>
          <AllMovies />
        </MoviesProvider>
      </Router>,
    );
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading...');
  });
  it('should show series', async () => {
    const movies = [
      {
        title: 'U2: Live in Paris',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        programType: 'movie',
        images: {
          'Poster Art': {
            url: 'https://streamcoimg-a.akamaihd.net/000/963/194/963194-PosterArt-9d1f4f28bb94e5e0f06e83d1216a8e30.jpg',
            width: 559,
            height: 828,
          },
        },
        releaseYear: 2015,
      },
    ];
    render(
      <Router history={history}>
        <AppContext.Provider value={{ loading: false, movies }}>
          <AllMovies />
        </AppContext.Provider>
      </Router>,
    );
    expect(screen.getAllByTestId('movie')).toHaveLength(1);
  });

  it('should show no movie if none', async () => {
    render(
      <Router history={history}>
        <AppContext.Provider value={{ loading: false, movies: [] }}>
          <AllMovies />
        </AppContext.Provider>
      </Router>,
    );
    expect(screen.getByTestId('none')).toHaveTextContent('no movies');
  });
});
