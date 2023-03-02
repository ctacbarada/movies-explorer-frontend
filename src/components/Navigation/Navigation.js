import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ isOpen, onClose }) {
  function handleMouseEnter(e) {
    e.target.nextElementSibling.classList.add("navigation__underline-enable");
  }

  function handleMouseLeave(e) {
    e.target.nextElementSibling.classList.remove(
      "navigation__underline-enable"
    );
  }

  return (
    <section className={`navigation ${isOpen && "navigation-enable"}`}>
      <div className="navigation__container">
        <div className="navigation__links">
          <Link
            to="/"
            className="navigation__link"
            onClick={onClose}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
          <div className="navigation__underline"></div>
        </div>
        <div className="navigation__links">
          <Link
            to="/movies"
            className="navigation__link"
            onClick={onClose}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Movies
          </Link>
          <div className="navigation__underline"></div>
        </div>
        <div className="navigation__links">
          <Link
            to="/saved-movies"
            className="navigation__link"
            onClick={onClose}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Saved movies
          </Link>
          <div className="navigation__underline"></div>
        </div>
        <Link
          to="/profile"
          className="navigation__profile-button"
          onClick={onClose}
        ></Link>
        <button className="navigation__close-button" onClick={onClose}></button>
      </div>
    </section>
  );
}
