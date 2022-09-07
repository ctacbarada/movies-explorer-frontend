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
  loadMoreMovies,
  isMainMoviesSection,
  savedMovies,
}) {
  const windowMovies = window.location.pathname === "/movies";
  console.log("counterFROMFUCNTION:", counter)
  return isLoading ? (
    <>
      <section className="moviescardlist" aria-label="Фильмы">
        {recivedMoives.slice(0, counter).map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={windowMovies ? movie.id : movie._id}
            handleSaveMovie={handleSaveMovie}
            handleUnSaveMovie={handleUnSaveMovie}
            isMainMoviesSection={isMainMoviesSection}
            savedMovies={savedMovies}
          />
        ))}
      </section>
      {moreMovies ? <MoreMovies loadMoreMovies={loadMoreMovies} /> : null}
    </>
  ) : (
    <Preloader />
  );
}
