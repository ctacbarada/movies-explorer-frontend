import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='aboutme'>
      <div className='aboutme__header'>Студент</div>
      <div className='aboutme__profile'>
        <div className='aboutme__profile-info'>
          <h2 className='aboutme__name'>Виталий</h2>
          <p className='aboutme__specialis'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutme__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div className='aboutme__links'>
              <p className='aboutme__link'>Facebook</p>
              <p className='aboutme__link'>Github</p>
            </div>
        </div>
        <div className='aboutme__avatar'></div>
      </div>

    </div>
  )
}
