import "./SearchForm.css";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

export default function SearchForm({
  findMovies,
  activateToggle,
  isToggleActiveMoives,
  recivedMoives,
}) {
  const windowMovies = window.location.pathname === "/movies";
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
              required: "Keyword required",
            }
          )}
          className="searchform__input"
          type="text"
          placeholder="Movie"
        />
        <button
          className="searchform__button-confirm"
          type="submit"
          aria-label="Search"
        />
        <button
          className={
            isToggleActiveMoives
              ? "searchform__toggle-enabled"
              : "searchform__toggle-enabled searchform__toggle-disabled"
          }
          type="button"
          aria-label="Short films"
          onClick={() => {
            setIsToggleActive(!isToggleActive);
            activateToggle(!isToggleActive);
          }}
        />
        <p className="searchform__toggle-name">Short films</p>
      </form>
      {windowMovies
        ? errors?.inputFindMovie && (
            <p className="searchform__errors">Keyword required</p>
          )
        : errors?.inputFindSavedMovie && (
            <p className="searchform__errors">Keyword required</p>
          )}
      {recivedMoives
        ? recivedMoives.length === 0 && (
            <p className="searchform__errors">Nothing found</p>
          )
        : null}
    </section>
  );
}
