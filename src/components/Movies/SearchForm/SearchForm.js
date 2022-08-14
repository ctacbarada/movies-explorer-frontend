import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form" name="searchform">
        <div className="searchform__icon"></div>
        <input
          className="searchform__input"
          name="searchform"
          type="text"
          placeholder="Фильм"
        />
        <button
          className="searchform__button-confirm"
          type="submit"
          aria-label="Поиск"
        />
        <button
          className="searchform__toggle"
          type="button"
          aria-label="Короткометражки"
        />
        <p className="searchform__toggle-name">Короткометражки</p>
      </form>
    </section>
  );
}
