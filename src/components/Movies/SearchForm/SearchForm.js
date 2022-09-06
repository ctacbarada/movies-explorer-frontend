import "./SearchForm.css";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

export default function SearchForm({
  findMovies,
  activateToggle,
  isToggleActiveMoives,
  recivedMoives,
}) {
  const windowMovies =
    window.location.href === "http://stan.nomoredomains.xyz/movies" ||
    window.location.href === "http://localhost:3000/movies";
  const windowSavedMovies =
    window.location.href === "http://stan.nomoredomains.xyz/saved-movies" ||
    window.location.href === "http://localhost:3000/saved-movies";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      inputFindMovie: windowMovies ? localStorage.getItem("valueMovies") : null,
    },
  });
  const [isToggleActive, setIsToggleActive] = useState(false);
  const inputFindMovieValue = watch(
    windowMovies ? "inputFindMovie" : "inputFindSavedMovie"
  );

  function onSubmit() {
    findMovies(inputFindMovieValue);
    // windowMovies ? setIsToggleActive(true) : setIsToggleActive(false);
    windowMovies
      ? localStorage.setItem("valueMovies", inputFindMovieValue)
      : localStorage.setItem("valueSavedMovies", inputFindMovieValue);
  }

  return (
    <section className="searchform">
      <form
        className="searchform__form"
        name="searchform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="searchform__icon"></div>
        <input
          {...register(
            windowMovies ? "inputFindMovie" : "inputFindSavedMovie",
            {
              required: "Нужно ввести ключевое слово",
            }
          )}
          className="searchform__input"
          type="text"
          placeholder="Фильм"
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
            activateToggle(!isToggleActive);
          }}
        />
        <p className="searchform__toggle-name">Короткометражки</p>
      </form>
      {errors?.inputFindMovie && (
        <p className="searchform__errors">Нужно ввести ключевое слово</p>
      )}
      {recivedMoives.length === 0 && (
        <p className="searchform__errors">Ничего не найдено</p>
      )}
    </section>
  );
}
