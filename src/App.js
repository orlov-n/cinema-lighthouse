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
      isHomepage: true,
      selectedMovieId: null,
      isError: false,
      errorMessage: '',
      isLoading: true,
      trailer: []
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      const filteredMovies = data.movies.filter(movie => movie.backdrop_path !== "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg" && movie.backdrop_path !== '')
      this.setState({
        movies: filteredMovies,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({
        isError: true,
        errorMessage: error
      })
    })
  };

  updateSelectedMovieId = (id) => {
    // this.setState({selectedMovieId: id});
    getSelectedTrailer(id) 
    .then(data => {
      this.setState({
        trailer: data.videos[0],
        selectedMovieId: id
      })
    })
  };

  displayHomePage = () => {
    this.setState({isHomepage: true});
  };

  render() {
    return (
      <>
        <nav>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div class="text-container">
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
          {this.state.isError && <Error errorMessage={this.state.errorMessage} />}
          {this.state.isLoading && <h2>Page Loading...</h2>}
          <Route
            exact path="/" render={() => <MoviesContainer movieData={this.state.movies} updateSelectedMovieId={this.updateSelectedMovieId} selectedMovieId={this.state.selectedMovieId} trailer={this.state.trailer}/>}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              console.log('match: ', match)
              return <InfoPage selectedMovieId={match.params.id} />
            }}
          /> 
        </main>
      </>
    );
  };
};

export default App;
