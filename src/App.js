import React, { useState, useEffect } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import InfoPage from './InfoPage';
import { getMovies, getSelectedTrailer } from './apiCalls';
import { NavLink, Route } from 'react-router-dom';


const App = () => {

  const [movies, setMovies] = useState([])
  const [selectedMovieId, setSelectedMovieId] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [trailer, setTrailer] = useState([])

  useEffect(() => {
    getMovies()
    .then(data => {
      const filteredMovies = data.movies.filter(movie => movie.backdrop_path !== "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg" && movie.backdrop_path !== '');
      setMovies(filteredMovies)
    })
    .catch(error => {
      console.log(error);
      setErrorMessage(`${showError(error)}`)
    })
    // getTrailer(selectedMovieId)
  // getTrailer(selectedMovieId)
  }, [selectedMovieId, errorMessage, trailer])



  const updateSelectedMovieId = (id) => {
    setSelectedMovieId(id)
    getTrailer(id)
  };


  const getTrailer = async (id) => {
    await getSelectedTrailer(id)
    .then(data => {
      id === data.videos.movie_id ?
      setTrailer(
        data.videos[0]) : getSelectedTrailer(id)
        setTrailer(data.videos[0])
     })
   }

 const showError = (response) => {
    if (!response.ok) {
     return ("Something went wrong, please try again!");
    };
  };
  
  
    return (
      <body>
        <nav>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            <div className="text-container">
              <span>C</span>
              <span>i</span>
              <span>n</span>
              <span>e</span>
              <span>m</span>
              <span>a</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>L</span>
              <span>i</span>
              <span>g</span>
              <span>h</span>
              <span>t</span>
              <span>H</span>
              <span>o</span>
              <span>u</span>
              <span>s</span>
              <span>e</span>
            </div>  
          </NavLink>
        </nav>
          {errorMessage ? <h2>{errorMessage}</h2> :
        <main>
          <Route
            exact path="/" render={() => <MoviesContainer movies={movies} updateSelectedMovieId={updateSelectedMovieId} selectedMovieId={selectedMovieId} trailer={trailer}/>}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              console.log('match.params from app when passed to infro page', match.params.id);
              return <InfoPage selectedMovieId={parseInt(match.params.id)} showError={showError}/>
            }}
          /> 
        </main>
}
      </body>
    );
  };


export default App;
