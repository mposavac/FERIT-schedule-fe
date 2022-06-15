import React from "react";
import { useTranslation } from "../../../context";
import "./Button.scss";

export default function Button({ text, icon, onClick }: any) {
  const { t } = useTranslation();
  return (
    <div className="button" onClick={onClick}>
      <img src={icon} alt={text} />
      <p>{t(text)}</p>
    </div>
  );
}
