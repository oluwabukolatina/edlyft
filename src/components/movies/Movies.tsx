import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';
import AppContext from '../../context/AppContext';

const Movies = ({ history }: any) => {
  const { getMovies }: any = useContext(AppContext);
  const goToPage = () => {
    history.push('/movies');
  };

  return (
    <div
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
