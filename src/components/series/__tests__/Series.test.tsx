import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import AllSeries from '../AllSeries';
import { createMemoryHistory } from 'history';
import MoviesProvider from '../../../provider/MoviesProvider';
import '@testing-library/jest-dom/extend-expect';
import AppContext from '../../../context/AppContext';

describe('app', () => {
  const history = createMemoryHistory();

  it('should show loading', async () => {
    render(
      <Router history={history}>
        <MoviesProvider>
          <AllSeries />
        </MoviesProvider>
      </Router>,
    );
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading...');
  });
  it('should show series', async () => {
    const series = [
      {
        title: 'Wolf Creek',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        programType: 'series',
        images: {
          'Poster Art': {
            url: 'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg',
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2016,
      },
      {
        title: 'No Activity',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        programType: 'series',
        images: {
          'Poster Art': {
            url: 'https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg',
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2015,
      },
    ];
    render(
      <Router history={history}>
        <AppContext.Provider value={{ loading: false, series }}>
          <AllSeries />
        </AppContext.Provider>
      </Router>,
    );
    expect(screen.getAllByTestId('serie')).toHaveLength(2);
  });

  it('should show no series if none', async () => {
    render(
      <Router history={history}>
        <AppContext.Provider value={{ loading: false, series: [] }}>
          <AllSeries />
        </AppContext.Provider>
      </Router>,
    );
    expect(screen.getByTestId('none')).toHaveTextContent('no series');
  });
});
