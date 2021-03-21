import React from 'react';
import { withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';
const Series = ({ history }: any) => {
  const goToPage = () => {
    history.push('/series');
  };
  return (
    <div onClick={goToPage}>
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="center">Series</div>
      </div>
      <p>Popular Series</p>
    </div>
  );
};

export default withRouter(Series);
