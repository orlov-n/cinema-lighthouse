import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import movieData from './testData.js';
import InfoPage from './InfoPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      isHomepage: true,
      selectedMovie: {}
    };
  };

  displayInfoPage = (id) => {
    const matchId = this.state.movies.find(movie => movie.id === id)
    this.setState({
      isHomepage: false,
      selectedMovie: matchId
    })
  }

  displayHomePage = () => {
    this.setState({
      isHomepage: true
    })
  }

  render() {
    return (
      <>
      <nav>
        <h1 onClick={() => this.displayHomePage()}>Rancid Tomatillos</h1>
      </nav>
      <main>
       {!this.state.isHomepage ? <InfoPage selectedMovie={this.state.selectedMovie}  /> :  <MoviesContainer movieData={this.state.movies} displayInfoPage={this.displayInfoPage}/>} 
      </main>
      </>
    );
  };
};


export default App;
