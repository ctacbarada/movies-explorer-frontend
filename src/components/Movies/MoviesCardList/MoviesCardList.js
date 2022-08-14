import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList() {
  return (
    <section className='moviescardlist' aria-label='Фильмы'>
      <MoviesCard />
    </section>
  )
}
