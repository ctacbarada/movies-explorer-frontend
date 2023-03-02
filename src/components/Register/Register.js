import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";

export default function Register({ handleRegister, errorMessageReg }) {
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
      <h2 className="register__title">Welcome!</h2>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="register__name">Name</p>
        <input
          {...register("registrationName", {
            required: "Enter your name",
            minLength: {
              value: 2,
              message: "Minimum 2 characters",
            },
            maxLength: {
              value: 30,
              message: "Maximum 30 characters",
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
          {...register("registrationEmail", {
            required: "Enter e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email must be with @",
            },
          })}
          className="register__input"
          type="text"
          placeholder="E-mail"
        />
        <span className="register__errors">
          {errors?.registrationEmail?.message}
        </span>
        <p className="register__name">Password</p>
        <input
          {...register("registrationPassword", {
            required: "Enter password",
          })}
          className="register__input"
          type="password"
          placeholder="Password"
        />
        <span className="register__errors">
          {errors?.registrationPassword && "Enter password"}
        </span>
        <span className="register__error">{errorMessageReg}</span>
        <button className="register__signup" type="submit">
          Register
        </button>
        <p className="register__signup-question">
          Already registered?
          <Link to="/signin" className="register__signin">
            To come in
          </Link>
        </p>
      </form>
    </section>
  );
}
