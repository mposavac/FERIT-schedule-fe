import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser, useAuthDispatch } from "../../../../context";
import { useLoading, useErrorMsg } from "../../../../context";
import { useForm } from "../../../../hooks/useForm";
import { SignUpForm } from "../../../../interfaces/auth.types";
import AuthBackground from "../../shared/AuthBackground/AuthBackground";
import SignUpPresenter from "../SignUpPresenter/SignUpPresenter";

export default function SignUpContainer() {
  const [values, handleChange] = useForm<SignUpForm>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoading();
  const { showMsg } = useErrorMsg();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showLoader();
    signUpUser(dispatch, values)
      .then(() => {
        hideLoader();
        navigate("/");
      })
      .catch((e) => {
        hideLoader();
        showMsg(e.message);
      });
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
