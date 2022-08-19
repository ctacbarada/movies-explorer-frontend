import React, { useEffect, useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [film, setFilm] = React.useState("");

  function inputFilm(e) {
    setFilm(e.target.value);
  }

  return (
    <section className="searchform">
      <form className="searchform__form" name="searchform">
        <div className="searchform__icon"></div>
        <input
          className="searchform__input"
          name="searchform"
          type="text"
          placeholder="Фильм"
          onChange={inputFilm}
          required
        />
        <button
          className="searchform__button-confirm"
          type="submit"
          aria-label="Поиск"
        />
        <button
          className={
            isToggleActive
              ? "searchform__toggle-enabled"
              : "searchform__toggle-enabled searchform__toggle-disabled"
          }
          type="button"
          aria-label="Короткометражки"
          onClick={setIsToggleActive}
        />
        <p className="searchform__toggle-name">Короткометражки</p>
      </form>
    </section>
  );
}
