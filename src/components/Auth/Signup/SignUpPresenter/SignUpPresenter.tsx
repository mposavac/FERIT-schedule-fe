import React from "react";
import { useTranslation } from "../../../../context";
import {
  emailIcon,
  paswdIcon,
  userIcon,
} from "../../../../styles/assets/images";
import { SignUpPresenterProps } from "../types";

export default function SignUpPresenter({
  values,
  handleChange,
  submit,
}: SignUpPresenterProps) {
  const { t } = useTranslation();
  return (
    <form className="flex-center" onSubmit={submit}>
      <h2>{t("signup")}</h2>
      <div className="inputs__container">
        <label htmlFor="username">{t("username")}</label>
        <div>
          <img src={userIcon} alt="user" />
          <input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email">{t("e-mail")}</label>
        <div>
          <img src={emailIcon} alt="email" />
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="password">{t("password")}</label>
        <div>
          <img src={paswdIcon} alt="password" />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <button>{t("signup.submit.button")}</button>
    </form>
  );
}
