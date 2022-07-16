import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ movieData, updateSelectedMovieId, trailer, selectedMovieId }) => {
    if (!trailer) {
        trailer = {key: ''}
    }
    const movieCards = movieData.map(movie => {
        let potentialTrailer =`https://www.youtube.com/embed/`
        movie.id === selectedMovieId ? potentialTrailer += trailer.key + `?mute=1&autoplay=1` : potentialTrailer = ''
        return (
            <Link to={`/${movie.id}`} style={{ textDecoration: 'none' }} key={movie.id}>
                <MovieCard 
                    movie={movie}
                    updateSelectedMovieId={updateSelectedMovieId}
                    trailer={potentialTrailer}
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