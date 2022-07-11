import React, { Component } from 'react';
import './InfoPage.css';
import { getSelectedMovie } from './apiCalls';
import Error from './Error';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      isError: false,
      errorMessage: ''
    };
  };

  componentDidMount = () => {
    getSelectedMovie(this.props.selectedMovieId)
    .then(data => {
      this.setState({
        selectedMovie: data.movie
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

  render() {
    return (
      <>
        {this.state.isError ? <Error errorMessage={this.state.errorMessage} /> :
        <>
          <h2>{this.state.selectedMovie.title}</h2>
          <h3>{this.state.selectedMovie.tagline}</h3>
          <img src={this.state.selectedMovie.backdrop_path} alt='movie backdrop'></img>
        </>
        }
      </>
    );
  };
};

export default InfoPage;