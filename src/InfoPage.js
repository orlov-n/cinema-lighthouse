import React, { Component } from 'react';
import './InfoPage.css';
import { getSelectedMovie } from './apiCalls';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {}
    };
  };

  componentDidMount = () => {
    getSelectedMovie(this.props.selectedMovieId)
    .then(data => {
      this.setState({
        selectedMovie: data.movie
      })
    })
  };

  render() {
    return (
      <>
        <h2>{this.state.selectedMovie.title}</h2>
        <h3>{this.state.selectedMovie.tagline}</h3>
        <img src={this.state.selectedMovie.backdrop_path} alt='movie backdrop'></img>
      </>
    );
  };
};

export default InfoPage;