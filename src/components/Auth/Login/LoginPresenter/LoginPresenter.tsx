import React from "react";
import { useTranslation } from "../../../../context";
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
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="password">{t("password")}</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button>{t("login")}</button>
    </form>
  );
}
