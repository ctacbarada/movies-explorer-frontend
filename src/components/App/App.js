import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const history = useNavigate();

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

  useEffect(() => {
    checkToken();
  }, []);

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
              <ProtectedRoute isUserLoggedIn={isUserLoggedIn}>
                <Header isUserLoggedIn={isUserLoggedIn} />
                <Movies />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isUserLoggedIn={isUserLoggedIn} />
                <SavedMovies />
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
