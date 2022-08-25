import "./Profile.css";
import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

export default function Profile({ onUpdateUser, handleSignOut }) {
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || "");
    setEmail(currentUser.email || "");
  }, [currentUser]);

  function inputName(e) {
    setName(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      email,
    });
  }

  return (
    <section className="profile">
      <div className="profile__title">Привет, {name}!</div>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__string">
          <p className="profile__string-name">Имя</p>
          <input
            className="profile__input"
            value={name}
            onChange={inputName}
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          ></input>
        </div>
        <div className="profile__string">
          <p className="profile__string-name">E-mail</p>
          <input
            className="profile__input"
            value={email}
            onChange={inputEmail}
            name="email"
            type="text"
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            required
          ></input>
        </div>
        <button className="profile__edit-button" type="submit">
          Редактировать
        </button>
        <Link to="/" className="profile__logout" onClick={handleSignOut}>
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}
