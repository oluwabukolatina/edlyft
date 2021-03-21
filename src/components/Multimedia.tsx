import React from 'react';
import Series from './series/Series';
import Movies from './movies/Movies';

const Multimedia = () => {
  return (
    <div className="movies">
      {/*<p>loading...</p>*/}
      {/*<p>Oops, something went wrong...</p>*/}
      <Series />
      <Movies />
    </div>
  );
};

export default Multimedia;
