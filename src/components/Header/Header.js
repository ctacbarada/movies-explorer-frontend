import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const headerWithLogin = (
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
    <Link to="/profile" className="header__hamburger" />
  </header>
);

const headerWithoutLogin = (
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

function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return isUserLoggedIn ? headerWithLogin : headerWithoutLogin;
}

export default Header;
