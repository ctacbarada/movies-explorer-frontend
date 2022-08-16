import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  // const currentUser = React.useContext(CurrentUserContext);

  function inputName(e) {
    setName(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  // React.useEffect(() => {
  //   setName(currentUser.name || "");
  //   setDescription(currentUser.about || "");
  // }, [currentUser, isOpen]);

  return (
    <section className="profile">
      <div className="profile__title">Привет, Виталий!</div>
      <form className="profile__form">
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
        <Link to="/" className="profile__logout">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}
