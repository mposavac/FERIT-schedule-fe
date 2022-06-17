import React, { useState } from "react";
import { useTranslation } from "../../../../context";
import { paswdIcon, visibleIcon } from "../../../../styles/assets/images";
import { PasswordInputFieldProps } from "./types";

export default function PasswordInputField({
  password,
  handleChange,
}: PasswordInputFieldProps) {
  const { t } = useTranslation();
  const [showingPassword, setShowingPassword] = useState(false);

  const toggleShowingPassword = () => {
    setShowingPassword(!showingPassword);
  };
  return (
    <div>
      <label>{t("password")}</label>
      <div>
        <img className="field__icon" src={paswdIcon} alt="password" />
        <input
          id="password"
          className="password__input"
          name="password"
          type={showingPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
        />
        <img
          src={visibleIcon}
          className="password__visibility"
          alt="showPassword"
          onClick={toggleShowingPassword}
        />
      </div>
    </div>
  );
}
