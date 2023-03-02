import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Portfolio</h4>
      <ul className="portfolio__navigation">
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://sirstanislav.github.io/how-to-learn/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Static website</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://sirstanislav.github.io/russian-travel/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Responsive website</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
        <li className="portfolio__links">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://sirstanislav.github.io/mesto/"
            rel="noreferrer"
          >
            <div className="portfolio__name">Single Page Application</div>
            <div className="portfolio__url"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}
