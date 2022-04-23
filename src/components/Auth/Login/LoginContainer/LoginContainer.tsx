import React from "react";
import { Link } from "react-router-dom";
import { loginUser, useAuthDispatch } from "../../../../context";
import { useForm } from "../../../../hooks/useForm";
import { LoginForm } from "../../../../interfaces/auth.types";
import AuthBackground from "../../Shared/AuthBackground/AuthBackground";
import LoginPresenter from "../LoginPresenter/LoginPresenter";

export default function LoginContainer() {
  const [values, handleChange] = useForm<LoginForm>({
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(dispatch, values);
  };

  return (
    <AuthBackground
      additionalContent={
        <div className="auth__container__inner__additional__text">
          <p>Don't have account yet?</p>
          <Link to="/signup">Create an account.</Link>
        </div>
      }
    >
      <LoginPresenter
        values={values}
        handleChange={handleChange}
        submit={onSubmit}
      />
    </AuthBackground>
  );
}
