import React from "react";
import { Link } from "react-router-dom";
import { signUpUser, useAuthDispatch } from "../../../../context";
import { useForm } from "../../../../hooks/useForm";
import { SignUpForm } from "../../../../interfaces/auth.types";
import AuthBackground from "../../Shared/AuthBackground/AuthBackground";
import SignUpPresenter from "../SignUpPresenter/SignUpPresenter";

export default function SignUpContainer() {
  const [values, handleChange] = useForm<SignUpForm>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpUser(dispatch, values);
  };
  return (
    <AuthBackground
      additionalContent={
        <div className="auth__container__inner__additional__text">
          <p>Already have an account?</p>
          <Link to="/login">Login.</Link>
        </div>
      }
      backgroundSide="right"
    >
      <SignUpPresenter
        values={values}
        handleChange={handleChange}
        submit={onSubmit}
      />
    </AuthBackground>
  );
}
