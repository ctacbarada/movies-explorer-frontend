import React, { useEffect, useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard({
  movie,
  handleSaveMovie,
  handleUnSaveMovie,
  isMainMoviesSection,
  savedMovies,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);
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
    handleUnSaveMovie(savedMovie);
    setIsSaved(false);
  }

  useEffect(() => {
    setIsSaved(false);
    isMainMoviesSection
      ? savedMovies.map((item) => {
          if (item.movieId === movie.id) {
            setIsSaved(true);
            setSavedMovie(item);
          }
          return item;
        })
      : savedMovies.map((item) => {
          if (item.movieId === movie.movieId) {
            setIsSaved(true);
            setSavedMovie(item);
          }
          return item;
        });
  }, [movie, savedMovies, isMainMoviesSection, isSaved]);

  return (
    <>
      <div className="moviescard">
        <a href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img
            className="moviescard__image"
            src={movie.image.url ? `${url}/${movie.image.url}` : movie.image}
            alt={movie.nameRU}
          />
        </a>

        {isSaved ? (
          <button className="moviescard__saved" onClick={unSaveMovie} />
        ) : (
          <button className="moviescard__save" onClick={saveMovie} />
        )}
        <div className="moviescard__info">
          <p className="moviescard__title">{movie.nameRU}</p>
          <p className="moviescard__time">{time}</p>
        </div>
      </div>
    </>
  );
}
