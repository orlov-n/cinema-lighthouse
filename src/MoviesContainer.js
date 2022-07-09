import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movieData, displayInfoPage }) => {
    const movieCards = movieData.map(movie => {
        return (
            <MovieCard 
                key={movie.id}
                movie={movie}
                displayInfoPage={displayInfoPage}
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