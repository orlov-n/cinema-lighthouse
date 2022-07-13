import React from 'react';
import './MoviesContainer.css';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ movieData, displayInfoPage }) => {
    const movieCards = movieData.map(movie => {
        return (
            <Link to={`/${movie.id}`} style={{ textDecoration: 'none' }}>
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                    displayInfoPage={displayInfoPage}
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