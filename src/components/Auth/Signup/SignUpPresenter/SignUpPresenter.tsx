import React from "react";
import { useTranslation } from "../../../../context";
import { emailIcon, userIcon } from "../../../../styles/assets/images";
import PasswordInputField from "../../Shared/PasswordInputField/PasswordInputField";
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
          <img className="field__icon" src={userIcon} alt="user" />
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
          <img className="field__icon" src={emailIcon} alt="email" />
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <PasswordInputField
          password={values.password}
          handleChange={handleChange}
        />
      </div>
      <button>{t("signup.submit.button")}</button>
    </form>
  );
}
