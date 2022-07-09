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

  displayInfoPage = (id) => {
    this.setState({
      isHomepage: false
    })
  
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
       {!this.state.isHomepage ? <InfoPage movieData={this.state.movies}  /> :  <MoviesContainer movieData={this.state.movies} displayInfoPage={this.displayInfoPage}/>} 
      </main>
    );
  };
};


export default App;
