import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import InfoPage from './InfoPage';
import { getMovies } from './apiCalls';
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
      isLoading: true
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      this.setState({
        movies: data.movies,
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

  displayInfoPage = (id) => {
    this.setState({selectedMovieId: id});
  };

  displayHomePage = () => {
    this.setState({isHomepage: true});
  };

  render() {
    return (
      <>
        <nav>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <h1>Rancid Tomatillos</h1>
          </Link>
        </nav>
        <main>
          {this.state.isError && <Error errorMessage={this.state.errorMessage} />}
          {this.state.isLoading && <h2>Page Loading...</h2>}
          <Route
            exact path="/" render={() => <MoviesContainer movieData={this.state.movies} displayInfoPage={this.displayInfoPage} />}
          />
          <Route
            exact path='/:id' render={({ match }) => {
              return <InfoPage selectedMovieId={match.params.id} />
            }}
          />
        </main>
      </>
    );
  };
};

export default App;
