import React from "react";
import { useTranslation } from "../../../context";
import "./Button.scss";
import { ButtonProps } from "./types";

export default function Button({ text, icon, onClick }: ButtonProps) {
  const { t } = useTranslation();
  return (
    <div className="button" onClick={onClick}>
      <img src={icon} alt={text} />
      <p>{t(text)}</p>
    </div>
  );
}
