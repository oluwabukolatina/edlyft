import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import Placeholder from '../../assets/placeholder.png';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import { RouteComponentProps } from 'react-router-dom';
const Series: React.FC<RouteComponentProps> = ({ history }) => {
  const { getSeries } = useContext(AppContext) as ContextType;

  const goToPage = () => {
    history.push('/series');
  };
  return (
    <div
      data-testid="series"
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
