import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import MoreMovies from "../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
  isMainMoviesSection,
  savedMovies,
  value
}) {
  const windowMovies = window.location.pathname === "/movies";
  const innerWidth = window.innerWidth;
  const [moreMovies, setMoreMovies] = useState(true);
  const [counter, setCounter] = useState(12);

  useEffect(() => {
    if (innerWidth > 769) {
      setCounter(12);
    } else if (innerWidth > 321) {
      setCounter(8);
    } else {
      setCounter(5);
    }
  }, [value]);

  function checkCounter() {
    if (recivedMoives.length > counter) {
      setMoreMovies(true);
    } else {
      setMoreMovies(false);
    }
  }

  useEffect(() => {
    checkCounter();
  }, [recivedMoives, counter]);

  function loadMoreMovies() {
    console.log("loadMoreMovies.length:", recivedMoives.length);
    console.log("loadMoreMovies:", counter);
    if (innerWidth > 768) {
      if (recivedMoives.length > counter) {
        setCounter(counter + 3);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    } else if (innerWidth > 321) {
      if (recivedMoives.length > counter) {
        setCounter(counter + 2);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    } else {
      if (recivedMoives.length > counter) {
        setCounter(counter + 1);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    }
  }

  return isLoading ? (
    windowMovies ? (
      <>
        <section className="moviescardlist" aria-label="Фильмы">
          {recivedMoives.slice(0, counter).map((movie, i) => (
            <MoviesCard
              movie={movie}
              key={movie.id}
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
      <section className="moviescardlist" aria-label="Фильмы">
        {recivedMoives.map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            handleSaveMovie={handleSaveMovie}
            handleUnSaveMovie={handleUnSaveMovie}
            isMainMoviesSection={isMainMoviesSection}
            savedMovies={savedMovies}
          />
        ))}
      </section>
    )
  ) : (
    <Preloader />
  );
}
