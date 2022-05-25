import React from "react";
import { useTranslation } from "../../../context";
import "./ToggleButton.scss";
import { ToggleButtonProps } from "./types";

export default function ToggleButton({
  value,
  option1,
  option2,
  toggleOption,
}: ToggleButtonProps) {
  const { t } = useTranslation();
  return (
    <div className="toggle__button__container flex-center">
      <input
        type="radio"
        name="choice"
        id={option1}
        value={option1}
        checked={value === option1}
        onChange={(e: any) => toggleOption(e.target.value)}
      />
      <label htmlFor={option1}>{t(`toggle.${option1}`)}</label>

      <div
        className={`toggle__button__container__switch ${
          value === option1 ? "option1" : "option2"
        }`}
        onClick={() => {
          if (value === option1) toggleOption(option2);
          else toggleOption(option1);
        }}
      />

      <input
        type="radio"
        name="choice"
        id={option2}
        value={option2}
        checked={value === option2}
        onChange={(e: any) => toggleOption(e.target.value)}
      />
      <label htmlFor={option2}>{t(`toggle.${option2}`)}</label>
    </div>
  );
}
