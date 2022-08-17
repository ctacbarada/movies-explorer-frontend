import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isOpen }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isNavigation, setIsNavigation] = useState(false);

  function handleOpenNavigationMenu() {
    setIsNavigation(true);
  }

  function handleCloseNavigationMenu() {
    setIsNavigation(false);
  }

  return isUserLoggedIn ? (
    <>
      <header className="header">
        <div className="header__logo" />
        <div className="header__navigation">
          <Link to="/movies" className="header__films-button">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__saved-films-button">
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="header__profile-button" />
        <button className="header__hamburger" onClick={handleOpenNavigationMenu} />
      </header>
      <Navigation isOpen={isNavigation} onClose={handleCloseNavigationMenu} />
    </>
  ) : (
    <header className="header">
      <div className="header__logo" />
      <div className="header__auth">
        <Link to="/signup" className="header__registration">
          Регистрация
        </Link>
        <Link to="/signin" className="header__login">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
