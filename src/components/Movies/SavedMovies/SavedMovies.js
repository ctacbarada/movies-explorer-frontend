import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies({
  handleSaveMovie,
  handleUnSaveMovie,
  recivedMoives,
  isLoading,
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
        recivedMoives={recivedMoives}
      />
      {recivedMoives.length === 0 ? null : (
        <MoviesCardList
          handleSaveMovie={handleSaveMovie}
          handleUnSaveMovie={handleUnSaveMovie}
          recivedMoives={recivedMoives}
          isLoading={isLoading}
          isSavedMoviesSection={isSavedMoviesSection}
          savedMovies={savedMovies}
        />
      )}
    </>
  );
}
