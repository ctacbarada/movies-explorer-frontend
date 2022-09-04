import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";

export default function Register({ handleRegister, errorMessage }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [registrationName, registrationEmail, registrationPassword] = watch([
    "registrationName",
    "registrationEmail",
    "registrationPassword",
  ]);

  function onSubmit() {
    handleRegister(registrationName, registrationEmail, registrationPassword);
  }

  return (
    <section className="register">
      <Link to="/" className="register__logo"></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="register__name">Имя</p>
        <input
          {...register("registrationName", {
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
          className="register__input"
          type="text"
          placeholder="Name"
        />
        <span className="register__errors">
          {errors?.registrationName?.message}
        </span>
        <p className="register__name">E-mail</p>
        <input
          {...register("registrationEmail", { required: "Введите e-mail" })}
          className="register__input"
          type="text"
          placeholder="E-mail"
        />
        <span className="register__errors">
          {errors?.registrationEmail && "Введите e-mail"}
        </span>
        <p className="register__name">Пароль</p>
        <input
          {...register("registrationPassword", {
            required: "Введите password",
          })}
          className="register__input"
          type="password"
          placeholder="Password"
        />
        <span className="register__errors">
          {errors?.registrationPassword && "Введите password"}
        </span>
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
