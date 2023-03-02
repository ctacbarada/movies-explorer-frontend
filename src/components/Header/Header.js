import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  isUserLoggedIn,
  setMainMovies,
  onClickHeaderMovies,
  onClickHeaderSavedMovies,
}) {
  const [isNavigation, setIsNavigation] = useState(false);

  const handleOpenNavigationMenu = () => {
    setIsNavigation(true);
  };

  const handleCloseNavigationMenu = () => {
    setIsNavigation(false);
  };

  function handleMouseEnter(e) {
    e.target.nextElementSibling.classList.add("header__underline-enable");
  }

  function handleMouseLeave(e) {
    e.target.nextElementSibling.classList.remove("header__underline-enable");
  }

  return isUserLoggedIn ? (
    <>
      <header className="header">
        <Link to="/" className="header__logo" />
        <div className="header__navigation">
          <div className="header__link">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "header__films-button header__button_active"
                  : "header__films-button"
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={onClickHeaderMovies}
            >
              Movies
            </NavLink>
            <div className="header__underline"></div>
          </div>
          <div className="header__link">
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                isActive
                  ? "header__films-button header__button_active"
                  : "header__films-button"
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={onClickHeaderSavedMovies}
            >
              Saved Movies
            </NavLink>
            <div className="header__underline"></div>
          </div>
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
      <Link to="/" className="header__logo" />
      <div className="header__auth">
        <Link to="/signup" className="header__registration">
          Registration
        </Link>
        <Link to="/signin" className="header__login">
          Sign in
        </Link>
      </div>
    </header>
  );
}

export default Header;
