import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Educational project Yandex.Practicum x BeatFilm.
      </p>
      <div className="footer__navigation">
        <div className="footer__links">
          <p className="footer__link">Yandex.Practicum</p>
          <p className="footer__link">Github</p>
          <p className="footer__link">Facebook</p>
        </div>
        <p className="footer__copyright">© 2022</p>
      </div>
    </footer>
  );
}
