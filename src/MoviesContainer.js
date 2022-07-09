import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movieData }) => {
    const movieCards = movieData.map(movie => {
        return (
            <MovieCard 
                key={movie.id}
                movie={movie}
            />
        );
    });

    return (
        <div className= 'movies-container'>
            {movieCards}
        </div> 
    );
};

export default MoviesContainer;