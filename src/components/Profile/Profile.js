import "./Profile.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { useForm } from "react-hook-form";

export default function Profile({
  onUpdateUser,
  handleSignOut,
  confirmMessage,
  onUpdateUseState,
  errorMessage,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      profileName: currentUser.name,
      profileEmail: currentUser.email,
    },
  });

  const [profileName, profileEmail] = watch(["profileName", "profileEmail"]);

  useEffect(() => {
    onUpdateUseState();
  }, [profileName, profileEmail]);

  function onSubmit() {
    onUpdateUser(profileName, profileEmail);
  }

  return (
    <section className="profile">
      <div className="profile__title">Привет, {currentUser.name}!</div>
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__string">
          <p className="profile__string-name">Имя</p>
          <input
            {...register("profileName", {
              required: "Введите имя",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 30,
                message: "Максимум 30 символа",
              },
            })}
            className="profile__input"
            type="text"
            placeholder="Имя"
          />
        </div>
        <span className="profile__errors">
          {errors?.profileName && "Введите имя"}
        </span>
        <div className="profile__string">
          <p className="profile__string-name">E-mail</p>
          <input
            {...register("profileEmail", {
              required: "Введите e-mail",
            })}
            className="profile__input"
            type="text"
            placeholder="E-mail"
          ></input>
        </div>
        <span className="profile__errors">
          {errors?.profileEmail && "Введите e-mail"}
        </span>
        <span className="profile__confirm-message">
          {confirmMessage ? "Данные обновлены" : ""}
          {errorMessage ? errorMessage : ""}
        </span>
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
