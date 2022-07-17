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
      console.log(error.message);
      this.setState({errorMessage: this.showError(error)})
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

  showError = (response) => {
    if (!response.ok) {
     return ("Something went wrong, please try again!");
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
              <span>n</span>
              <span>c</span>
              <span>i</span>
              <span>d</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>m</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span>s</span>
            </div>  
          </NavLink>
        </nav>
        <main>
          {this.state.errorMessage && <h2>{this.state.errorMessage}</h2>}
          <Route
            exact path="/" render={() => <MoviesContainer movieData={this.state.movies} updateSelectedMovieId={this.updateSelectedMovieId} selectedMovieId={this.state.selectedMovieId} trailer={this.state.trailer}/>}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              return <InfoPage selectedMovieId={match.params.id} showError={this.showError}/>
            }}
          /> 
        </main>
      </>
    );
  };
};

export default App;
