import React from 'react'
import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoreMovies from '../MoreMovies/MoreMovies'

export default function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      {/* <MoreMovies /> */}
    </>
  )
}
