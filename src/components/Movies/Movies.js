import React, { useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}
