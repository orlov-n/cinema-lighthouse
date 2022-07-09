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
      isHomepage: true
    };
  };

  displayInfoPage = (event) => {
    this.setState({
      isHomepage: false
    })
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movieData={ this.state.movies }/>
        <InfoPage movieData={ this.state.movies }/>
      </main>
    );
  };
};


export default App;
