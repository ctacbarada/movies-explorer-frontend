import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isOpen }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isNavigation, setIsNavigation] = useState(false);

  const handleOpenNavigationMenu = () => {
    setIsNavigation(true);
  }

  const handleCloseNavigationMenu = () => {
    setIsNavigation(false);
  }

  return isUserLoggedIn ? (
    <>
      <header className="header">
        <Link to='/' className="header__logo" />
        <div className="header__navigation">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "header__films-button header__button_active"
                : "header__films-button"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "header__films-button header__button_active"
                : "header__films-button"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="header__profile-button" />
        <button
          className="header__hamburger"
          onClick={handleOpenNavigationMenu}
        />
      </header>
      <Navigation isOpen={isNavigation} onClose={handleCloseNavigationMenu} />
    </>
  ) : (
    <header className="header">
      <Link to='/' className="header__logo" />
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
