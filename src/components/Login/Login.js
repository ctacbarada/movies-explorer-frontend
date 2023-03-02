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
      <h2 className="login__title">Glad to see!</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="login__name">E-mail</p>
        <input
          {...register("loginEmail", {
            required: "Enter e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email must be with @",
            },
          })}
          className="login__input"
          type="text"
          placeholder="E-mail"
        />
        <span className="login__errors">{errors?.loginEmail?.message}</span>
        <p className="login__name">Password</p>
        <input
          {...register("loginPassword", {
            required: "Enter password",
          })}
          className="login__input"
          type="password"
          placeholder="Password"
        />
        <span className="login__errors">
          {errors?.loginPassword && "Enter password"}
        </span>
        <span className="login__error">{errorMessageLog}</span>
        <button className="login__signup" type="submit">
          Sign in
        </button>
        <p className="login__signup-question">
          Not registered yet?
          <Link to="/signup" className="login__signin">
            Registration
          </Link>
        </p>
      </form>
    </section>
  );
}
