import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, updateSelectedMovieId, trailer }) => { 
    return (
        <div className="card-container">
            <div className="card">
                <div className="half top">
                     <div className='content' onMouseOver={() => updateSelectedMovieId(movie.id)}>
                        <img src={movie.backdrop_path} alt='movie backdrop'></img>
                        <p>{movie.title} {`(${movie.release_date.slice(0, 4)})`}</p>
                     </div>
                </div>
                <div className="half bottom">
                    <div className="content">
                        <iframe className='trailer' width="360" height="215" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default MovieCard;