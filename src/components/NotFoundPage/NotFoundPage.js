import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <section className="notfoundpage">
      <h2 className="notfoundpage__title">404</h2>
      <p className="notfoundpage__text">Страница не найдена</p>
      <Link to="/" className="notfoundpage__back">
        Назад
      </Link>
    </section>
  );
}
