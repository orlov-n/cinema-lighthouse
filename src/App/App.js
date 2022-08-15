import React, { useState, useEffect } from 'react';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import InfoPage from '../InfoPage/InfoPage';
import { getMovies, getSelectedTrailer } from '../apiCalls';
import { NavLink, Route } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';


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
      <>
          {errorMessage ? <h2>{errorMessage}</h2> :
        <main>
          <Navbar />
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
      </>
    );
  };


export default App;
