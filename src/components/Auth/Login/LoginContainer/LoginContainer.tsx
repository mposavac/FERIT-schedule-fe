import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  loginUser,
  useAuthDispatch,
  useErrorMsg,
  useLoading,
  useTranslation,
} from "../../../../context";
import { useForm } from "../../../../hooks/useForm";
import { LoginForm } from "../../../../interfaces/auth.types";
import { authSchema } from "../../../../schemas/";
import AuthBackground from "../../Shared/AuthBackground/AuthBackground";
import LoginPresenter from "../LoginPresenter/LoginPresenter";

export default function LoginContainer() {
  const [values, handleChange, validateForm] = useForm<LoginForm>(
    {
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showLoader();
    validateForm()
      .then(() =>
        loginUser(dispatch, values)
          .then(() => {
            hideLoader();
            navigate("/");
          })
          .catch((e) => {
            hideLoader();
            showMsg(e.message);
          })
      )
      .catch(() => hideLoader());
  };

  return (
    <AuthBackground
      additionalContent={
        <div className="auth__container__inner__additional__text">
          <p>{t("login.account.create.text")}</p>
          <Link to="/signup">{t("login.account.create.link")}</Link>
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
