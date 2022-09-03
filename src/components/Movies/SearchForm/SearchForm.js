import "./SearchForm.css";
import { React, useState } from "react";

export default function SearchForm({
  findMovies,
  activateToggle,
  isToggleActiveMoives,
}) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [value, setValue] = useState('')

  const windowMovies =
    window.location.href === "http://stan.nomoredomains.xyz/movies" ||
    window.location.href === "http://localhost:3000/movies";
  const windowSavedMovies =
    window.location.href === "http://stan.nomoredomains.xyz/saved-movies" ||
    window.location.href === "http://localhost:3000/saved-movies";

  function inputFilm(e) {
    findMovies(e.target.value);
    setIsToggleActive(false);
  }

  function onSubmit(e) {
    e.preventDefault()
    setIsToggleActive(false);
  }

  return (
    <section className="searchform">
      <form
        className="searchform__form"
        name="searchform"
        onSubmit={onSubmit}
      >
        <div className="searchform__icon"></div>
        <input
          className="searchform__input"
          name="searchform"
          value={
            windowMovies
              ? localStorage.getItem("valueMovies")
              : localStorage.getItem("valueSavedMovies")
          }
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
            isToggleActiveMoives
              ? "searchform__toggle-enabled"
              : "searchform__toggle-enabled searchform__toggle-disabled"
          }
          type="button"
          aria-label="Короткометражки"
          onClick={() => {
            setIsToggleActive(!isToggleActive);
            activateToggle(isToggleActive);
          }}
        />
        <p className="searchform__toggle-name">Короткометражки</p>
      </form>
    </section>
  );
}
