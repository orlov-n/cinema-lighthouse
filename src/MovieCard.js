import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='card' id={movie.id} onClick={() => console.log('this is movie id', movie.id)}>
            <img src={movie.backdrop_path} alt='movie backdrop'></img>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieCard;