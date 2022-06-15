import React from "react";
import { useTranslation } from "../../../../context";
import { emailIcon, paswdIcon } from "../../../../styles/assets/images";
import { LoginPresenterProps } from "../types";

export default function LoginPresenter({
  values,
  handleChange,
  submit,
}: LoginPresenterProps) {
  const { t } = useTranslation();
  return (
    <form className="flex-center" onSubmit={submit}>
      <h2>{t("login")}</h2>
      <div className="inputs__container">
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
      <button>{t("login")}</button>
    </form>
  );
}
