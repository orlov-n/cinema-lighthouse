import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='card'>
            <img src={movie.backdrop_path} alt='movie backdrop'></img>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieCard;