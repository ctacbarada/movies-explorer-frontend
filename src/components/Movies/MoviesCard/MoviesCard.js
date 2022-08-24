import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const url = "https://api.nomoreparties.co/";
  const time =
    Math.floor(movie.duration / 60) +
    ":" +
    (movie.duration % 60 < 10
      ? "0" + (movie.duration % 60)
      : movie.duration % 60);

  function saveMovie() {
    setIsSaved(true);
  }

  function unSaveMovie() {
    setIsSaved(false);
  }

  return (
    <>
      <div className="moviescard">
        <a href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img
            className="moviescard__image"
            src={`${url}/${movie.image.url}`}
            alt={`${url}/${movie.nameRU}`}
          />
        </a>

        {!isSaved ? (
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
