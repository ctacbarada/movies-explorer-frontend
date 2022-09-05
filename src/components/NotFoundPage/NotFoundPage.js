import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="notfoundpage">
      <h2 className="notfoundpage__title">404</h2>
      <p className="notfoundpage__text">Страница не найдена</p>
      <button className="notfoundpage__back" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
