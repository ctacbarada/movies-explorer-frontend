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
import { TrowUnauthorizedError } from "../../errors/TrowUnauthorizedError";

function App() {
  const [isSavedMoviesSection, setIsSavedMoviesSection] = useState(true);
  const [isMainMoviesSection, setIsMainMoviesSection] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageReg, setErrorMessageReg] = useState("");
  const [errorMessageLog, setErrorMessageLog] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [value, setValue] = useState("");

  const [recivedMoives, setRecivedMoives] = useState([]);
  const [savedMoives, setSavedMoives] = useState([]);
  const [copySavedMoives, setCopySavedMoives] = useState([]);
  const [isToggleActiveMoives, setIsToggleActiveMoives] = useState(false);

  const windowMovies = window.location.pathname === "/movies";
  const windowReg = window.location.pathname === "/signin";
  const windowLog = window.location.pathname === "/signup";

  const [isLoading, setIsLoading] = useState(false);

  const [token, setToken] = useState("");
  const history = useNavigate();
  const url = "https://api.nomoreparties.co";

  // function checkTokenValidity() {
  //   if (token !== localStorage.getItem("jwt")) {
  //     handleSignOut()
  //   }
  // }

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
        .catch((err) => {
          console.log(`Ошибка токена: ${err}`);
          handleSignOut();
        });
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
        setErrorMessageReg(error.message);
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
        setErrorMessageLog(error.message);
      });
  }

  function onUpdateUseState() {
    setConfirmMessage(false);
    setErrorMessage("");
  }

  function handleUpdateUser(name, email) {
    if (token !== localStorage.getItem("jwt")) {
      throw new TrowUnauthorizedError("Ошибка токена");
    } else {
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
  }

  function handleSignOut() {
    setIsUserLoggedIn(false);
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    if (!localStorage.getItem("recivedMoives")) {
      MoviesApi.getMovies()
        .then((res) => {
          setIsLoading(true);
          localStorage.setItem("recivedMoives", JSON.stringify(res));
          localStorage.setItem("lastFoundMovies", JSON.stringify(res));
        })
        .catch((err) => console.log(`Ошибка загрузки фильмов: ${err}`));
    } else {
      setIsLoading(true);
      localStorage.getItem("valueMovies")
        ? setRecivedMoives(JSON.parse(localStorage.getItem("lastFoundMovies")))
        : setRecivedMoives(JSON.parse(localStorage.getItem("recivedMoives")));
    }
  }, [token]);

  function onClickHeaderMovies() {
    if (localStorage.getItem("isMoviesToggleActive")) {
      setIsToggleActiveMoives(true);
    } else {
      setIsToggleActiveMoives(false);
    }
  }

  const onClickHeaderSavedMovies = () => {
    setIsToggleActiveMoives(false);
    localStorage.removeItem("valueSavedMovies");
  };

  useEffect(() => {
    checkToken();

    if (localStorage.getItem("lastFoundMovies")) {
      if (localStorage.getItem("isMoviesToggleActive") && windowMovies) {
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

    localStorage.setItem("profileName", currentUser.name);
    localStorage.setItem("profileEmail", currentUser.email);

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
  }, [token, windowMovies, currentUser.user_id]);

  function activateToggle(isToggleActive) {
    if (isToggleActive) {
      setIsToggleActiveMoives(true);
    } else {
      setIsToggleActiveMoives(false);
      if (windowMovies) {
        localStorage.removeItem("isMoviesToggleActive");
      } else {
        return;
      }
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
  }, [isToggleActiveMoives, windowMovies]);

  function findMovies(value) {
    setValue(value);
    if (windowMovies) {
      if (!!localStorage.getItem("isMoviesToggleActive")) {
        setIsToggleActiveMoives(true);
        const movie = Object.values(
          JSON.parse(localStorage.getItem("recivedMoives"))
        ).filter((item) => {
          return item.nameRU.toLowerCase().includes(value.toLowerCase())
            ? item
            : null;
        });
        const shortMovie = Object.values(movie).filter((item) => {
          return item.duration < 40 ? item : null;
        });
        setRecivedMoives(shortMovie);
        localStorage.setItem(
          "isMoviesToggleActive",
          JSON.stringify(shortMovie)
        );
        localStorage.setItem("lastFoundMovies", JSON.stringify(movie));
      } else {
        const movie = Object.values(
          JSON.parse(localStorage.getItem("recivedMoives"))
        ).filter((item) => {
          return item.nameRU.toLowerCase().includes(value.toLowerCase())
            ? item
            : null;
        });
        setRecivedMoives(movie);
        localStorage.setItem("lastFoundMovies", JSON.stringify(movie));
      }
    } else {
      if (isToggleActiveMoives) {
        const movie = Object.values(
          JSON.parse(localStorage.getItem("savedMovies"))
        ).filter((item) => {
          return item.nameRU.toLowerCase().includes(value.toLowerCase())
            ? item
            : null;
        });
        const shortMovie = Object.values(movie).filter((item) => {
          return item.duration < 40 ? item : null;
        });
        setSavedMoives(shortMovie);
        setCopySavedMoives(movie);
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
  }

  function handleSaveMovie(movie) {
    if (token !== localStorage.getItem("jwt")) {
      throw new TrowUnauthorizedError("Ошибка токена");
    } else {
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
        .catch((err) => console.log(`Ошибка сохранения фильма: ${err}`));
    }
  }

  function handleUnSaveMovie(savedMoive) {
    if (token !== localStorage.getItem("jwt")) {
      throw new TrowUnauthorizedError("Ошибка токена");
    } else {
      MainApi.deleteMovie(savedMoive._id, token)
        .then(() => {
          setSavedMoives((state) =>
            state.filter((item) => {
              return item._id !== savedMoive._id;
            })
          );
        })
        .catch((err) => console.log(`Ошибка удаления фильма: ${err}`));
    }
  }

  useEffect(() => {
    setErrorMessageReg("");
    setErrorMessageLog("");
  }, [windowReg, windowLog]);

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
            path="/movies/*"
            element={
              <ProtectedRoute isUserLoggedIn={isUserLoggedIn} path="">
                <Header
                  isUserLoggedIn={isUserLoggedIn}
                  onClickHeaderSavedMovies={onClickHeaderSavedMovies}
                />
                <Movies
                  handleSaveMovie={handleSaveMovie}
                  handleUnSaveMovie={handleUnSaveMovie}
                  recivedMoives={recivedMoives}
                  isLoading={isLoading}
                  isSavedMoviesSection={isSavedMoviesSection}
                  isMainMoviesSection={isMainMoviesSection}
                  savedMovies={savedMoives}
                  findMovies={findMovies}
                  activateToggle={activateToggle}
                  isToggleActiveMoives={isToggleActiveMoives}
                  value={value}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies/*"
            element={
              <ProtectedRoute isUserLoggedIn={isUserLoggedIn} path="">
                <Header
                  isUserLoggedIn={isUserLoggedIn}
                  onClickHeaderMovies={onClickHeaderMovies}
                />
                <SavedMovies
                  handleSaveMovie={handleSaveMovie}
                  handleUnSaveMovie={handleUnSaveMovie}
                  recivedMoives={savedMoives}
                  isLoading={isLoading}
                  isSavedMoviesSection={isSavedMoviesSection}
                  savedMovies={savedMoives}
                  findMovies={findMovies}
                  activateToggle={activateToggle}
                  isToggleActiveMoives={isToggleActiveMoives}
                />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isUserLoggedIn={isUserLoggedIn} path="">
                <Header isUserLoggedIn={isUserLoggedIn} />
                <Profile
                  onUpdateUser={handleUpdateUser}
                  handleSignOut={handleSignOut}
                  confirmMessage={confirmMessage}
                  onUpdateUseState={onUpdateUseState}
                  errorMessage={errorMessage}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              isUserLoggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login
                  handleLogin={handleLogin}
                  errorMessageLog={errorMessageLog}
                />
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
                  errorMessageReg={errorMessageReg}
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
