import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

  const [recivedMoives, setRecivedMoives] = useState([]);
  const [savedMoives, setSavedMoives] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(12);

  const [token, setToken] = useState("");
  const history = useNavigate();
  const innerWidth = window.innerWidth;
  const url = "https://api.nomoreparties.co";
  // const [userId, setUserId] = useState('')

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
        setCurrentUser(res);
        history("/signin"); //Если форма отправлена успешна, перенаправим пользователя на страницу авторизации.
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
          // setUserId(data.userId)
          history("/movies");
        }
      })
      .catch((error) => {
        console.log("Ошибка авторизации:");
        setErrorMessage(error.message);
      });
  }

  function handleUpdateUser({ name, email }) {
    MainApi.setUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка редактирования профиля: ${err}`));
  }

  function handleSignOut() {
    setIsUserLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  useEffect(() => {
    checkToken();
  }, []);

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
      movie.id,
      token
    )
      .then((res) => {})
      .catch((err) => console.log(`Ошибка удаления фильма: ${err}`));
  }

  function handleUnSaveMovie(savedMoive) {
    console.log(savedMoive._id)
    MainApi.deleteMovie(savedMoive._id, token)
      .then((res) => {})
      .catch((err) => console.log(`Ошибка сохранения фильма: ${err}`));
  }

  useEffect(() => {
    MainApi.getMovies(token)
      .then((res) => {
        setSavedMoives(res);
        if (innerWidth > 1280 && innerWidth > 769) {
          setCounter(12);
        } else if (innerWidth <= 768 && innerWidth > 321) {
          setCounter(8);
        } else if (innerWidth <= 320) {
          setCounter(5);
        }
      })
      .catch((err) => console.log(`Ошибка загрузки фильмов: ${err}`));
  }, [innerWidth, token]);

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
                    savedMoives={savedMoives}
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
                  moreMovies={moreMovies}
                  buttonMore={buttonMore}
                  isSavedMoviesSection={isSavedMoviesSection}
                  savedMoives={savedMoives}
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
                />
              </>
            }
          />

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />

          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                errorMessage={errorMessage}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
