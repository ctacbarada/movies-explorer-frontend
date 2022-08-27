import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
  counter,
  moreMovies,
  buttonMore,
  isSavedMoviesSection,
  isMainMoviesSection,
  savedMoives
}) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleUnSaveMovie={handleUnSaveMovie}
        recivedMoives={recivedMoives}
        isLoading={isLoading}
        counter={counter}
        moreMovies={moreMovies}
        buttonMore={buttonMore}
        isSavedMoviesSection={isSavedMoviesSection}
        isMainMoviesSection={isMainMoviesSection}
        savedMoives={savedMoives}
      />
    </>
  );
}
