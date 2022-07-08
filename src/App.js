import React, { Component } from 'react';
import './App.css';
import './MoviesContainer.js';
import movieData from './testData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  };

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer />
      </main>
    );
  };
};


export default App;
