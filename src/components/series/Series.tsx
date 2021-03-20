import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Placeholder from '../../assets/placeholder.png';

const Series = () => {
  const { movies }: any = useContext(AppContext);
  return (
    <div>
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="center">Series</div>
      </div>
      <p>Popular Series</p>
    </div>
  );
};

export default Series;
