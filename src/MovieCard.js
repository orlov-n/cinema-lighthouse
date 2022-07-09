import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, displayInfoPage }) => {
    return (
        <div className='card' onClick={() => displayInfoPage(movie.id)}>
            <img src={movie.backdrop_path} alt='movie backdrop'></img>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieCard;