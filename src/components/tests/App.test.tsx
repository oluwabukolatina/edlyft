import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import AllSeries from '../series/AllSeries';
import { createMemoryHistory } from 'history';
import MoviesProvider from '../../provider/AppProvider';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home';
import userEvent from '@testing-library/user-event';

describe('app', () => {
  it('should show loading', async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <MoviesProvider>
          <AllSeries />
        </MoviesProvider>
      </Router>,
    );
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading...');
  });
  it('should lead to series when clciked', async () => {
    let testLocation;
    render(
      <MemoryRouter initialEntries={['/']}>
        <MoviesProvider>
          <Home />
        </MoviesProvider>
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    screen.getAllByTestId('series');

    userEvent.click(screen.getByTestId('series'));

    expect(testLocation?.pathname).toBe('/series');
  });
  it('should lead to movies when clciked', async () => {
    let testLocation;
    render(
      <MemoryRouter initialEntries={['/']}>
        <MoviesProvider>
          <Home />
        </MoviesProvider>
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );

    userEvent.click(screen.getByTestId('movies'));

    expect(testLocation?.pathname).toBe('/movies');
  });
});
