import React from 'react';

const InfoPage = ({ selectedMovie }) => {

  return (
    <>
      <h2>{selectedMovie.title}</h2>
      <img src={selectedMovie.backdrop_path} alt='movie backdrop'></img>
    </>
  );
};

export default InfoPage;