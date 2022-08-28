import "./SearchForm.css";
import React, { useState } from "react";

export default function SearchForm({ sortFilms, activeToggle }) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [inputSearchBar, setInputSearchBar] = useState("");

  function inputFilm(e) {
    sortFilms(e.target.value);
    setInputSearchBar(e.target.value);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setInputSearchBar(inputSearchBar);
  }

  return (
    <section className="searchform">
      <form
        className="searchform__form"
        name="searchform"
        onSubmit={handleSubmitSearchForm}
      >
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
          selected={isToggleActive}
          onClick={() => {
            setIsToggleActive(!isToggleActive);
            activeToggle(isToggleActive);
          }}
        />
        <p className="searchform__toggle-name">Короткометражки</p>
      </form>
    </section>
  );
}
