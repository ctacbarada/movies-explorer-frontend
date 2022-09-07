import { React } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function Login({ handleLogin, errorMessageLog }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [loginEmail, loginPassword] = watch(["loginEmail", "loginPassword"]);

  function onSubmit() {
    handleLogin(loginEmail, loginPassword);
  }

  return (
    <section className="login">
      <Link to="/" className="login__logo"></Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="login__name">E-mail</p>
        <input
          {...register("loginEmail", {
            required: "Введите e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email должен быть с @",
            },
          })}
          className="login__input"
          type="text"
          placeholder="E-mail"
        />
        <span className="login__errors">{errors?.loginEmail?.message}</span>
        <p className="login__name">Пароль</p>
        <input
          {...register("loginPassword", {
            required: "Введите password",
          })}
          className="login__input"
          type="password"
          placeholder="Password"
        />
        <span className="login__errors">
          {errors?.loginPassword && "Введите password"}
        </span>
        <span className="login__error">{errorMessageLog}</span>
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
