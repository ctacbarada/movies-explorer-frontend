import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <div className="aboutproject">
      <p className="aboutproject__title">О проекте</p>
      <div className="aboutproject__card">
        <h3 className="aboutproject__card-title">
          Дипломный проект включал 5&nbsp;этапов
        </h3>
        <h3 className="aboutproject__card-title">
          На&nbsp;выполнение диплома ушло 5&nbsp;недель
        </h3>
        <p className="aboutproject__card-text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и&nbsp;финальные доработки.
        </p>
        <p className="aboutproject__card-text">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно
          было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutproject__infographic">
        <div className="aboutproject__infographic-title">1 неделя</div>
        <div className="aboutproject__infographic-title">4 недели</div>
        <p className="aboutproject__infographic-text">Back-end</p>
        <p className="aboutproject__infographic-text">Front-end</p>
      </div>
    </div>
  );
}
