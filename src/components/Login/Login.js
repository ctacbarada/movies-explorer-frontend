import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  const [password, setPassword] = React.useState("");
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

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   handlelogin(password, email);
  // }

  return (
    <section className="login">
      <Link to="/" className="login__logo"></Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <p className="login__name">E-mail</p>
        <input
          className="login__input"
          value={email}
          onChange={inputEmail}
          name="email"
          type="text"
          placeholder="E-mail"
          minLength="2"
          maxLength="40"
          required
        />
        <p className="login__name">Пароль</p>
        <input
          className="login__input"
          value={password}
          onChange={inputPassword}
          name="password"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <button className="login__signup" type="submit">
          Войти
        </button>
        <p className="login__signup-question">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__signin">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}
