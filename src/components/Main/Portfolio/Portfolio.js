import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <nav className='portfolio__navigation'>
        <div className='portfolio__link'>
          <div className='portfolio__name'>Статичный сайт</div>
          <div className='portfolio__url'></div>
        </div>
        <div className='portfolio__link'>
          <div className='portfolio__name'>Адаптивный сайт</div>
          <div className='portfolio__url'></div>
        </div>
        <div className='portfolio__link'>
          <div className='portfolio__name'>Одностраничное приложение</div>
          <div className='portfolio__url'></div>
        </div>
      </nav>
    </div>
  )
}
