import React from "react";
import { useTranslation } from "../../../../context";
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
        <input
          id="username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />
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
      <button>{t("signup.submit.button")}</button>
    </form>
  );
}
