import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ movieData, updateSelectedMovieId, trailer }) => {
    const movieCards = movieData.map(movie => {
        return (
            <Link to={`/${movie.id}`} style={{ textDecoration: 'none' }} key={movie.id}>
                <MovieCard 
                    movie={movie}
                    updateSelectedMovieId={updateSelectedMovieId}
                    trailer={trailer}
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