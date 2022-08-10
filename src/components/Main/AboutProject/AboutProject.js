import React from 'react'
import './AboutProject.css'

export default function AboutProject() {
  return (
    <div className='aboutproject'>
      <p className='aboutproject__title'>О проекте</p>
      <div className='aboutproject__card'>
          <h3 className='aboutproject__card-title'>Дипломный проект включал 5 этапов</h3>
          <h3 className='aboutproject__card-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__card-info'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='aboutproject__card-info'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      <div className='aboutproject__infographic'>
        <div className='aboutproject__infographic-title'>1 неделя</div>
        <div className='aboutproject__infographic-title'>4 неделя</div>
        <div className='aboutproject__infographic-info'>Back-end</div>
        <div className='aboutproject__infographic-info'>Front-end</div>
      </div>
    </div>
  )
}
