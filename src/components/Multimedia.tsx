import React from 'react';
import Series from './series/Series';
import Movies from './movies/Movies';

const Multimedia = () => {
  return (
    <div className="movies">
      <Series />
      <Movies />
    </div>
  );
};

export default Multimedia;
