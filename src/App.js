import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import InfoPage from './InfoPage';
import { getMovies, getSelectedTrailer } from './apiCalls';
import { NavLink, Route } from 'react-router-dom';

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
      this.setState({errorMessage: this.throwError(error)})
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

  throwError = (response) => {
    if (!response.ok) {
      throw new Error("Something went wrong, please try again!");
    } else {
      return response.json();
    };
  };
  
  render() {
    return (
      <>
        <nav>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
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
          </NavLink>
        </nav>
        <main>
          {this.state.errorMessage && <h2>{this.state.errorMessage}</h2>}
          {!this.state.movies.length && <h2>Page Loading...</h2>}
          <Route
            exact path="/" render={() => <MoviesContainer movieData={this.state.movies} updateSelectedMovieId={this.updateSelectedMovieId} selectedMovieId={this.state.selectedMovieId} trailer={this.state.trailer}/>}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              return <InfoPage selectedMovieId={match.params.id} throwError={this.throwError}/>
            }}
          /> 
        </main>
      </>
    );
  };
};

export default App;
