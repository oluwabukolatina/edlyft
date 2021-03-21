import React, { useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';

const Movies: React.FC<RouteComponentProps> = ({ history }) => {
  const { getMovies } = useContext(AppContext) as ContextType;
  const goToPage = () => {
    history.push('/movies');
  };

  return (
    <div
      data-testid="movies"
      onClick={() => {
        goToPage();
        getMovies();
      }}
    >
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="centered">Movies</div>
      </div>
      <p>Popular Movies</p>
    </div>
  );
};

export default withRouter(Movies);
