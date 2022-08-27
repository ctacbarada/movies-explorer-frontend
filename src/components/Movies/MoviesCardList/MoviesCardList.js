import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import MoreMovies from "../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
  counter,
  moreMovies,
  buttonMore,
  isSavedMoviesSection,
  isMainMoviesSection,
  savedMoives,
}) {
  return isLoading ? (
    <>
      {}
      <section className="moviescardlist" aria-label="Фильмы">
        {recivedMoives.slice(0, counter).map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={isSavedMoviesSection ? i : movie.id}
            handleSaveMovie={handleSaveMovie}
            handleUnSaveMovie={handleUnSaveMovie}
            isSavedMoviesSection={isSavedMoviesSection}
            isMainMoviesSection={isMainMoviesSection}
            savedMoives={savedMoives}
          />
        ))}
      </section>
      {moreMovies ? <MoreMovies onClick={buttonMore} /> : null}
    </>
  ) : (
    <Preloader />
  );
}
