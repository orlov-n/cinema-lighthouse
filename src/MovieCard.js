import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, displayInfoPage }) => {
    return (
        <div className='card' onMouseOver={() => displayInfoPage(movie.id)}>
            <img src={movie.backdrop_path} alt='movie backdrop'></img>
            <p>{movie.title} {`(${movie.release_date.slice(0, 4)})`}</p>
        </div>
    );
};

export default MovieCard;