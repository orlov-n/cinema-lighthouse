const getMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (response) => response.json()
  );
};

const getSelectedMovie = (id) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => response.json());
};

const getSelectedTrailer = (id) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
  ).then((response) => response.json());
};

export { getMovies, getSelectedMovie, getSelectedTrailer };
