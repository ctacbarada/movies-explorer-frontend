import React, { useState } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
  counter,
  moreMovies,
  buttonMore,
  isSavedMoviesSection,
  savedMovies,
  findMovies,
  activateToggle,
  isToggleActiveMoives,
}) {
  return (
    <>
      <SearchForm
        findMovies={findMovies}
        activateToggle={activateToggle}
        isToggleActiveMoives={isToggleActiveMoives}
      />
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleUnSaveMovie={handleUnSaveMovie}
        recivedMoives={recivedMoives}
        isLoading={isLoading}
        counter={counter}
        moreMovies={moreMovies}
        buttonMore={buttonMore}
        isSavedMoviesSection={isSavedMoviesSection}
        savedMovies={savedMovies}
      />
    </>
  );
}
