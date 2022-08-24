import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import * as Auth from '../../Api/Auth'

export default function Register() {
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  // const currentUser = React.useContext(CurrentUserContext);

  function inputName(e) {
    setName(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function inputPassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister(name, email, password) {
    return Auth.register(name, email, password)
      .then(() => {
        history("/singin"); //Если форма отправлена успешна, перенаправим пользователя на страницу авторизации.
      })
      .catch((error) => {
        console.log("Ошибка регистрации:");
        setErrorMessage(error.message);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleRegister(password, email);
  }

  return (
    <section className="register">
      <Link to="/" className="register__logo"></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__name">Имя</p>
        <input
          className="register__input"
          value={name}
          onChange={inputName}
          name="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <p className="register__name">E-mail</p>
        <input
          className="register__input"
          value={email}
          onChange={inputEmail}
          name="email"
          type="text"
          placeholder="E-mail"
          minLength="2"
          maxLength="40"
          required
        />
        <p className="register__name">Пароль</p>
        <input
          className="register__input"
          value={password}
          onChange={inputPassword}
          name="password"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="register__error">Что-то пошло не так...</span>
        <button className="register__signup" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__signup-question">
          Уже зарегистрированы?
          <Link to="/signin" className="register__signin">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
