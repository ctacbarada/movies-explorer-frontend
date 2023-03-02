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
      profileName: localStorage.getItem("profileName"),
      profileEmail: localStorage.getItem("profileEmail"),
    },
  });

  const [profileName, profileEmail] = watch(["profileName", "profileEmail"]);

  function checkValidity() {
    if (
      profileName === localStorage.getItem("profileName") &&
      profileEmail === localStorage.getItem("profileEmail")
    ) {
      return (
        <button className="profile__edit-button" type="submit" disabled>
          Edit
        </button>
      );
    } else {
      return (
        <button className="profile__edit-button" type="submit">
          Edit
        </button>
      );
    }
  }

  function hideError() {
    document.getElementsByClassName(
      "profile__confirm-message"
    )[0].style.display = "none";
  }

  function resetError() {
    document.getElementsByClassName(
      "profile__confirm-message"
    )[0].style.display = "block";
  }

  useEffect(() => {
    onUpdateUseState();
    resetError();
  }, [profileName, profileEmail]);

  function onSubmit() {
    onUpdateUser(profileName, profileEmail);
    setTimeout(hideError, 3000);
  }

  return (
    <section className="profile">
      <div className="profile__title">Hello, {currentUser.name}!</div>
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__string">
          <p className="profile__string-name">Name</p>
          <input
            {...register("profileName", {
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
            className="profile__input"
            type="text"
            placeholder="Name"
          />
        </div>
        <span className="profile__errors">{errors?.profileName?.message}</span>
        <div className="profile__string">
          <p className="profile__string-name">E-mail</p>
          <input
            {...register("profileEmail", {
              required: "Enter e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email must be with @",
              },
            })}
            className="profile__input"
            type="text"
            placeholder="E-mail"
          ></input>
        </div>
        <span className="profile__errors">{errors?.profileEmail?.message}</span>
        <span className="profile__confirm-message">
          {confirmMessage ? "Data updated" : ""}
          {errorMessage ? errorMessage : ""}
        </span>
        {checkValidity()}
        <Link to="/" className="profile__logout" onClick={handleSignOut}>
          Sign out
        </Link>
      </form>
    </section>
  );
}
