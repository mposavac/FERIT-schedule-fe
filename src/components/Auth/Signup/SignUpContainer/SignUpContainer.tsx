import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signUpUser,
  useAuthDispatch,
  useTranslation,
} from "../../../../context";
import { useLoading, useErrorMsg } from "../../../../context";
import { useForm } from "../../../../hooks/useForm";

import { SignUpForm } from "../../../../interfaces/auth.types";
import { authSchema } from "../../../../schemas";
import AuthBackground from "../../Shared/AuthBackground/AuthBackground";
import SignUpPresenter from "../SignUpPresenter/SignUpPresenter";

export default function SignUpContainer() {
  const [values, handleChange, validateForm] = useForm<SignUpForm>(
    {
      username: "",
      email: "",
      password: "",
    },
    authSchema
  );
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoading();
  const { showMsg } = useErrorMsg();
  const { t } = useTranslation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showLoader();
    validateForm()
      .then(() =>
        signUpUser(dispatch, values)
          .then(() => {
            hideLoader();
            navigate("/");
          })
          .catch((e) => {
            hideLoader();
            showMsg(e?.message);
          })
      )
      .catch(() => hideLoader());
  };
  return (
    <AuthBackground
      additionalContent={
        <div className="auth__container__inner__additional__text">
          <p>{t("signup.account.create.text")}</p>
          <Link to="/login">{t("signup.account.create.link")}</Link>
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
