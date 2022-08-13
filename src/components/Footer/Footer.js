import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__navigation'>
        <div className='footer__links'>
          <p className='footer__link'>Яндекс.Практикум</p>
          <p className='footer__link'>Github</p>
          <p className='footer__link'>Facebook</p>
        </div>
        <p className='footer__copyright'>© 2022</p>
      </div>
    </div>
  )
}
