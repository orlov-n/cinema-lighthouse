import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import InfoPage from './InfoPage';
import { getMovies, getSelectedTrailer } from './apiCalls';
import Error from './Error';
import { Link, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieId: null,
      errorMessage: '',
      trailer: []
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      const filteredMovies = data.movies.filter(movie => movie.backdrop_path !== "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg" && movie.backdrop_path !== '');
      this.setState({movies: filteredMovies})
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMessage: error})
    })
  };

  updateSelectedMovieId = (id) => {
    getSelectedTrailer(id) 
    .then(data => {
      this.setState({
        trailer: data.videos[0],
        selectedMovieId: id
      })
    })
  };

  render() {
    return (
      <>
        <nav>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <div className="text-container">
              <span>r</span>
              <span>a</span>
              <span>ncid</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>mati</span>
              <span>llos</span>
            </div>  
          </Link>
        </nav>
        <main>
          {this.state.errorMessage && <Error errorMessage={this.state.errorMessage} />}
          {!this.state.movies.length && <h2>Page Loading...</h2>}
          <Route
            exact path="/" render={() => <MoviesContainer movieData={this.state.movies} updateSelectedMovieId={this.updateSelectedMovieId} selectedMovieId={this.state.selectedMovieId} trailer={this.state.trailer}/>}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              return <InfoPage selectedMovieId={match.params.id} />
            }}
          /> 
        </main>
      </>
    );
  };
};

export default App;
