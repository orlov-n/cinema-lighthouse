import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
// import MovieCard from './MovieCard'
import movieData from './testData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    };
  };

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movieData={ this.state.movies }/>
      </main>
    );
  };
};


export default App;
