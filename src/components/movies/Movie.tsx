import React from 'react';
import Placeholder from '../../assets/placeholder.png';

const Movie = () => {
  return (
    <div>
      <div className="movie">
        <img src={Placeholder} alt="placeholder" />
        <div className="centered">Movies</div>
      </div>
      <p>Popular Movies</p>
    </div>
  );
};

export default Movie;
