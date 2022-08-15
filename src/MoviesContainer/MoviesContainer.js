import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard/MovieCard';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ movies, updateSelectedMovieId, trailer, selectedMovieId }) => {
    if (!trailer) {
        trailer = {key: ''};
    };
    const movieCards = movies.map(movie => {
        let trailerUrl =`https://www.youtube.com/embed/`;
        (movie.id === selectedMovieId && movie.id === trailer.movie_id) ? trailerUrl += trailer.key + `?mute=1&autoplay=1` : trailerUrl = '';
        return (
            <Link to={`/${movie.id}`} style={{textDecoration: 'none'}} key={movie.id}>
                <MovieCard 
                    movie={movie}
                    updateSelectedMovieId={updateSelectedMovieId}
                    trailer={trailerUrl}
                />
            </Link>
        );
    });

    return (
        <div className= 'movies-container'>
            {movieCards}
        </div> 
    );
};

export default MoviesContainer;