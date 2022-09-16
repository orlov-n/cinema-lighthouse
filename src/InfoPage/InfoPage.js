import React, { useState, useEffect } from "react";
import "./InfoPage.css";
import { getSelectedMovie } from "../apiCalls";
import { Navbar } from "../Navbar/Navbar";

const InfoPage = ({ selectedMovieId, showError, updateSelectedMovieId }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    passId()
    getSelectedMovie(selectedMovieId)
      .then(
        (data) => {
          console.log("data from infoPage", data);
          let genres = data.movie.genres.join(" | ");
          setGenres(genres);
          setSelectedMovie(data.movie);
        }
      )
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, [errorMessage, selectedMovieId]);

  const passId =() => {
    updateSelectedMovieId(selectedMovieId)
  }

  return (
    <>
    {errorMessage ? (
        <h2>You broke our site! Please give it a few seconds...</h2>
      ) : Object.keys(selectedMovie).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <article
          className="movie-info-container"
          style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}
        >
          <div className="info-mask">
            <div className="rotating-box">
              <div className="rotating-box-inner">
                <div className="rotating-box-front">
                  <img
                    className="rotating-image"
                    src={selectedMovie.poster_path}
                    alt="movie backdrop"
                  ></img>
                </div>
                <div className="rotating-box-back">
                  <div className="info-container">
                    <div className="title-wrapper">
                      <h2 className="title">{selectedMovie.title}</h2>
                    </div>
                    <div className="tagline-wrapper">
                      <h3 className="tagline">{selectedMovie.tagline}</h3>
                    </div>
                    <div className="information-wrapper">
                      <p className="information">
                        <b>RELEASE DATE</b>: {selectedMovie.release_date}{" "}
                        <br></br>
                        <br></br>
                        {genres} <br></br>
                        <br></br>
                        {Math.round(selectedMovie.average_rating * 10) / 10}/10
                        ⭐️ <br></br>
                        <br></br>
                        <b>RUNTIME</b>: {selectedMovie.runtime} MINUTES
                      </p>
                    </div>
                    <div className="overview-wrapper">
                      <h3 className="overview">{selectedMovie.overview}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
      <div className="upside">
        <Navbar />{" "}
      </div>
    </>
  );
};

export default InfoPage;
