import React from 'react'
import './MoreMovies.css'

export default function MoreMovies({onClick}) {
  return (
    <section className='moremovies'>
      <button className='moremovies__button' onClick={onClick}>Ещё</button>
    </section>
  )
}
