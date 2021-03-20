import React from 'react';
import Placeholder from '../../assets/placeholder.png';

const Series = () => {
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
