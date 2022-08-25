import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register({ handleRegister, errorMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function inputName(e) {
    setName(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function inputPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleRegister(name, email, password);
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
          placeholder="Name"
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
          placeholder="Password"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="register__error">{errorMessage}</span>
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
