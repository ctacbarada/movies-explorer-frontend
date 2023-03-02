import React from "react";
import "./MoreMovies.css";

export default function MoreMovies({ loadMoreMovies }) {
  return (
    <section className="moremovies">
      <button className="moremovies__button" onClick={loadMoreMovies}>
        More
      </button>
    </section>
  );
}
