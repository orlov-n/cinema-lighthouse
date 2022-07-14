import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, updateSelectedMovieId, trailer }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="face face1">
                     <div className='content' onMouseOver={() => updateSelectedMovieId(movie.id)}>
                        <img src={movie.backdrop_path} alt='movie backdrop'></img>
                        <p>{movie.title} {`(${movie.release_date.slice(0, 4)})`}</p>
                     </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default MovieCard;