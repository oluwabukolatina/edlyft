import React from 'react';
import { withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';

const Movies = ({ history }: any) => {
  const goToPage = () => {
    history.push('/series');
  };

  return (
    <div onClick={goToPage}>
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="centered">Movies</div>
      </div>
      <p>Popular Movies</p>
    </div>
  );
};

export default withRouter(Movies);
