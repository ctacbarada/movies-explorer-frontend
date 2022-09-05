import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProtectedRoute from "../../utils/ProtectedRoute/ProtectedRoute";
import * as Auth from "../../utils/Api/Auth";
import { MainApi } from "../../utils/Api/MainApi";
import { MoviesApi } from "../../utils/Api/MoviesApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isSavedMoviesSection, setIsSavedMoviesSection] = useState(true);
  const [isMainMoviesSection, setIsMainMoviesSection] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [moreMovies, setMoreMovies] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(false);

  const [recivedMoives, setRecivedMoives] = useState([]);
  const [copyRecivedMoives, setCopyRecivedMoives] = useState([]);
  const [savedMoives, setSavedMoives] = useState([]);
  const [copySavedMoives, setCopySavedMoives] = useState([]);
  const [isToggleActiveMoives, setIsToggleActiveMoives] = useState(false);
  const [value, setValue] = useState("");

  const windowMovies =
    window.location.href === "http://stan.nomoredomains.xyz/movies" ||
    window.location.href === "http://localhost:3000/movies";
  const windowSavedMovies =
    window.location.href === "http://stan.nomoredomains.xyz/saved-movies" ||
    window.location.href === "http://localhost:3000/saved-movies";

  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(12);

  const [token, setToken] = useState("");
  const history = useNavigate();
  const innerWidth = window.innerWidth;
  const url = "https://api.nomoreparties.co";

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      setToken(jwt);
      Auth.token(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsUserLoggedIn(true);
          }
        })
        .catch((err) => console.log(`Ошибка токена: ${err}`));
    }
  }

  function handleRegister(name, email, password) {
    return Auth.register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
        setCurrentUser(res);
        history("/movies");
      })
      .catch((error) => {
        console.log("Ошибка регистрации:");
        setErrorMessage(error.message);
      });
  }

  function handleLogin(email, password) {
    return Auth.autorisation(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsUserLoggedIn(true);
          setToken(data.token);
          history("/movies");
        }
      })
      .catch((error) => {
        console.log("Ошибка авторизации:");
        setErrorMessage(error.message);
      });
  }

  function onUpdateUseState() {
    setConfirmMessage(false);
    setErrorMessage("");
  }

  function handleUpdateUser(name, email) {
    MainApi.setUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res);
        setConfirmMessage(true);
      })
      .catch((error) => {
        console.log(`Ошибка редактирования профиля: ${error}`);
        setErrorMessage("Пользователь с такой почтой уже существует");
      });
  }

  function handleSignOut() {
    setIsUserLoggedIn(false);
    localStorage.clear();
  }

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("recivedMoives")) {
      MoviesApi.getMovies(token)
        .then((res) => {
          setIsLoading(true);
          localStorage.setItem("recivedMoives", JSON.stringify(res));
        })
        .catch((err) => console.log(`Ошибка загрузки фильмов: ${err}`));
    } else {
      setIsLoading(true);
      setRecivedMoives(JSON.parse(localStorage.getItem("recivedMoives")));
      setCopySavedMoives(JSON.parse(localStorage.getItem("savedMovies")));
    }
  }, [token]);

  useEffect(() => {
    MainApi.getMovies(token)
      .then((res) => {
        const movie = Object.values(res).filter((item) => {
          return item.owner === currentUser.user_id ? item : null;
        });
        localStorage.setItem("savedMovies", JSON.stringify(movie));
        setSavedMoives(movie);
        setCopySavedMoives(movie);
      })
      .catch((err) => console.log(`Ошибка загрузки фильмов: ${err}`));
  }, [innerWidth, token, currentUser.user_id]);

  useEffect(() => {
    if (localStorage.getItem("lastFoundMovies")) {
      if (localStorage.getItem("isMoviesToggleActive")) {
        setIsToggleActiveMoives(true);
        setRecivedMoives(
          JSON.parse(localStorage.getItem("isMoviesToggleActive"))
        );
      } else {
        setRecivedMoives(JSON.parse(localStorage.getItem("lastFoundMovies")));
      }
    } else {
      return;
    }

    if (innerWidth > 769) {
      setCounter(12);
    } else if (innerWidth > 321) {
      setCounter(8);
    } else {
      setCounter(5);
    }
  }, [innerWidth, isToggleActiveMoives]);

  function activateToggle(isToggleActive) {
    if (isToggleActive) {
      setIsToggleActiveMoives(true);
    } else {
      setIsToggleActiveMoives(false);
      localStorage.removeItem("isMoviesToggleActive");
    }
  }

  useEffect(() => {
    if (windowMovies) {
      if (isToggleActiveMoives) {
        const movie = Object.values(recivedMoives).filter((item) => {
          return item.duration < 40 ? item : null;
        });
        setRecivedMoives(movie);
        localStorage.setItem("isMoviesToggleActive", JSON.stringify(movie));
      } else {
        setRecivedMoives(JSON.parse(localStorage.getItem("lastFoundMovies")));
        setIsToggleActiveMoives(false);
      }
    } else {
      if (isToggleActiveMoives) {
        const movie = Object.values(savedMoives).filter((item) => {
          return item.duration < 40 ? item : null;
        });
        setSavedMoives(movie);
      } else {
        setSavedMoives(copySavedMoives);
        setIsToggleActiveMoives(false);
      }
    }
  }, [isToggleActiveMoives]);

  function findMovies(value) {
    setValue(value);
    setIsToggleActiveMoives(false);
    localStorage.removeItem("isMoviesToggleActive");
    if (windowMovies) {
      const movie = Object.values(
        JSON.parse(localStorage.getItem("recivedMoives"))
      ).filter((item) => {
        return item.nameRU.toLowerCase().includes(value.toLowerCase())
          ? item
          : null;
      });
      setRecivedMoives(movie);
      setCopyRecivedMoives(movie);
      localStorage.setItem("lastFoundMovies", JSON.stringify(movie));
    } else {
      const movie = Object.values(
        JSON.parse(localStorage.getItem("savedMovies"))
      ).filter((item) => {
        return item.nameRU.toLowerCase().includes(value.toLowerCase())
          ? item
          : null;
      });
      setSavedMoives(movie);
      setCopySavedMoives(movie);
    }
  }

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

  function handleSaveMovie(movie) {
    MainApi.saveMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      url + movie.image.url,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN,
      url + movie.image.url,
      movie.id.toString(),
      token
    )
      .then((newMovie) => {
        setSavedMoives([newMovie, ...savedMoives]);
      })
      .catch((err) => console.log(`Ошибка удаления фильма: ${err}`));
  }

  function handleUnSaveMovie(savedMoive) {
    MainApi.deleteMovie(savedMoive._id, token)
      .then(() => {
        setSavedMoives((state) =>
          state.filter((item) => {
            return item._id !== savedMoive._id;
          })
        );
      })
      .catch((err) => console.log(`Ошибка сохранения фильма: ${err}`));
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header isUserLoggedIn={isUserLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              isUserLoggedIn ? (
                <ProtectedRoute isUserLoggedIn={isUserLoggedIn}>
                  <Header isUserLoggedIn={isUserLoggedIn} />
                  <Movies
                    handleSaveMovie={handleSaveMovie}
                    handleUnSaveMovie={handleUnSaveMovie}
                    recivedMoives={recivedMoives}
                    isLoading={isLoading}
                    counter={counter}
                    moreMovies={moreMovies}
                    buttonMore={buttonMore}
                    isSavedMoviesSection={isSavedMoviesSection}
                    isMainMoviesSection={isMainMoviesSection}
                    savedMovies={savedMoives}
                    findMovies={findMovies}
                    activateToggle={activateToggle}
                    isToggleActiveMoives={isToggleActiveMoives}
                  />
                  <Footer />
                </ProtectedRoute>
              ) : (
                <Preloader />
              )
            }
          />

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isUserLoggedIn={isUserLoggedIn} />
                <SavedMovies
                  handleSaveMovie={handleSaveMovie}
                  handleUnSaveMovie={handleUnSaveMovie}
                  recivedMoives={savedMoives}
                  isLoading={isLoading}
                  counter={counter}
                  buttonMore={buttonMore}
                  isSavedMoviesSection={isSavedMoviesSection}
                  savedMovies={savedMoives}
                  findMovies={findMovies}
                  activateToggle={activateToggle}
                  isToggleActiveMoives={isToggleActiveMoives}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Header isUserLoggedIn={isUserLoggedIn} />
                <Profile
                  onUpdateUser={handleUpdateUser}
                  handleSignOut={handleSignOut}
                  confirmMessage={confirmMessage}
                  onUpdateUseState={onUpdateUseState}
                  errorMessage={errorMessage}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              isUserLoggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login handleLogin={handleLogin} errorMessage={errorMessage} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              isUserLoggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Register
                  handleRegister={handleRegister}
                  errorMessage={errorMessage}
                />
              )
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
