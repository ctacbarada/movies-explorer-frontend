import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__navigation">
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://ctacbarada.github.io/mesto/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Статичный сайт</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://ctacbarada.github.io/RussianTravel/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Адаптивный сайт</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://ctacbarada.github.io/HowToLearn/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Одностраничное приложение</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}
