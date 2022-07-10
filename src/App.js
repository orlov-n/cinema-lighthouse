import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import InfoPage from './InfoPage';
import { getMovies } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isHomepage: true,
      selectedMovieId: null
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      this.setState({
        movies: data.movies
      })
    })
  };

  displayInfoPage = (id) => {
    this.setState({
      isHomepage: false,
      selectedMovieId: id
    });
  };

  displayHomePage = () => {
    this.setState({
      isHomepage: true
    });
  };

  render() {
    return (
      <>
        <nav>
          <h1 onClick={() => this.displayHomePage()}>Rancid Tomatillos</h1>
        </nav>
        <main>
          {!this.state.isHomepage ? <InfoPage selectedMovieId={this.state.selectedMovieId}  /> :  <MoviesContainer movieData={this.state.movies} displayInfoPage={this.displayInfoPage} />} 
        </main>
      </>
    );
  };
};

export default App;
