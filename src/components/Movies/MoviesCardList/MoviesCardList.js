import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { MoviesApi } from "../../../utils/MoviesApi";
import MoreMovies from "../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList() {
  const [recivedMoives, setRecivedMoives] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(true);
  const [counter, setCounter] = useState(12);
  const [moreMovies, setMoreMovies] = useState(true);

  const innerWidth = window.innerWidth;

  useEffect(() => {
    MoviesApi.getMovies()
      .then((res) => {
        setRecivedMoives(res);
        setIsLoading(true);
          if (innerWidth > 1280 && innerWidth > 769) {
            setCounter(12);
          } else if (innerWidth <= 768 && innerWidth > 321) {
            setCounter(8);
          } else if (innerWidth <= 320) {
            setCounter(5);
          }
      })
      .catch((err) => console.log(`Ошибка загрузки фильмов: ${err}`));
  }, [innerWidth]);


  function buttonMore() {
    if (window.innerWidth >= 1140) {
      setCounter(counter + 3);
      if (counter >= recivedMoives.length) {
        setMoreMovies(false);
      }
    } else if (window.innerWidth <= 1140 && window.innerWidth >= 768) {
      setCounter(counter + 2);
      if (counter >= recivedMoives.length) {
        setMoreMovies(false);
      }
    } else if (window.innerWidth <= 765) {
      setCounter(counter + 1);
      if (counter >= recivedMoives.length) {
        setMoreMovies(false);
      }
    }
  }

  return isLoading ? (
    <>
      <section className="moviescardlist" aria-label="Фильмы">
        {recivedMoives.slice(0, counter).map((movie) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </section>
      {moreMovies ? <MoreMovies onClick={buttonMore} /> : null}
    </>
  ) : (
    <Preloader />
  );
}
