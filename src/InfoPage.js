import React, { Component } from 'react';
import './InfoPage.css';
import { getSelectedMovie } from './apiCalls';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      errorMessage: '',
      genres: []
    };
  };

  componentDidMount = () => {
    getSelectedMovie(this.props.selectedMovieId)
    .then(data => {
      let genres = data.movie.genres.join(' | ');
      this.setState({
        selectedMovie: data.movie,
        genres: genres
      }); 
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMessage: `${this.props.showError(error)} ${error}`})
    })
  };

  render() {
    return (
      <>
        {this.state.errorMessage && <h2>{this.state.errorMessage}</h2>}
        {/* {this.state.errorMessage ? <h2 className='error'>{this.state.errorMessage}</h2> : */}
          <article className='movie-info-container' style={{backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`}}>
            <div className='info-mask'>
              <div className="rotating-box">
                <div className="rotating-box-inner">
                  <div className="rotating-box-front">
                    <img className='rotating-image'  src={this.state.selectedMovie.poster_path} alt='movie backdrop'></img> 
                  </div>
                  <div className="rotating-box-back">
                    <div className='info-container'>
                      <div className='title-wrapper'>
                        <h2 className='title'>{this.state.selectedMovie.title}</h2>
                      </div>
                      <div className='tagline-wrapper'>
                        <h3 className='tagline'>{this.state.selectedMovie.tagline}</h3>
                      </div>
                      <div className='information-wrapper'>
                        <p className="information">
                          <b>RELEASE DATE</b>: {this.state.selectedMovie.release_date} <br></br><br></br>
                          {this.state.genres} <br></br><br></br>
                          {Math.round(this.state.selectedMovie.average_rating * 10) / 10}/10 ⭐️ <br></br><br></br>
                          <b>RUNTIME</b>: {this.state.selectedMovie.runtime} MINUTES
                        </p>
                      </div>
                      <div className='overview-wrapper'>
                        <h3 className='overview'>{this.state.selectedMovie.overview}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        {/* } */}
      </>
    );
  };
};

export default InfoPage;