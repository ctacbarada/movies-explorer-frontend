import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({
  movie,
  handleSaveMovie,
  handleUnSaveMovie,
  isSavedMoviesSection,
  isMainMoviesSection,
  savedMoives,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [savedMoive, setSavedMoive] = useState([]);
  const url = "https://api.nomoreparties.co/";
  const time =
    Math.floor(movie.duration / 60) +
    ":" +
    (movie.duration % 60 < 10
      ? "0" + (movie.duration % 60)
      : movie.duration % 60);

  function saveMovie(e) {
    handleSaveMovie(movie);
    setIsSaved(true);
  }

  function unSaveMovie() {
    handleUnSaveMovie(savedMoive);
    setIsSaved(false);
  }

  useEffect(() => {
    isMainMoviesSection
      ? savedMoives.map((item) => {
          if (item.movieId === movie.id) {
            setIsSaved(true);
            setSavedMoive(item);
          }
          return item;
        })
      : savedMoives.map((item) => {
          if (item.movieId === movie.movieId) {
            setIsSaved(true);
            setSavedMoive(item);
          }
          return item;
        });
  }, [
    isSaved,
    savedMoives,
    savedMoive,
    isMainMoviesSection,
    movie.id,
    movie.movieId,
  ]);

  return (
    <>
      <div className="moviescard">
        <a href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img
            className="moviescard__image"
            src={
              !isMainMoviesSection && isSavedMoviesSection
                ? movie.image
                : `${url}/${movie.image.url}`
            }
            alt={movie.nameRU}
          />
        </a>

        {isMainMoviesSection && !isSaved ? (
          <button className="moviescard__save" onClick={saveMovie} />
        ) : (
          <div className="moviescard__saved" onClick={unSaveMovie} />
        )}
        <div className="moviescard__info">
          <p className="moviescard__title">{movie.nameRU}</p>
          <p className="moviescard__time">{time}</p>
        </div>
      </div>
    </>
  );
}
