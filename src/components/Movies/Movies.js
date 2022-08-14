import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreMovies from './MoreMovies/MoreMovies';

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreMovies />
    </>
  );
}
