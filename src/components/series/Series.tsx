import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';
import AppContext from '../../context/AppContext';
const Series = ({ history }: any) => {
  const { getSeries }: any = useContext(AppContext);
  const goToPage = () => {
    history.push('/series');
  };
  return (
    <div
      onClick={() => {
        goToPage();
        getSeries();
      }}
    >
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="center">Series</div>
      </div>
      <p>Popular Series</p>
    </div>
  );
};

export default withRouter(Series);
