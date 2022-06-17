import React from "react";
import { useTranslation } from "../../../../context";
import { emailIcon } from "../../../../styles/assets/images";
import PasswordInputField from "../../Shared/PasswordInputField/PasswordInputField";
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
      <button>{t("login")}</button>
    </form>
  );
}
