import React from "react";
import { feritLogoBijeli } from "../../../../styles/assets/images";
import "./AuthBackground.scss";

export default function AuthBackground({ children, additionalContent }: any) {
  return (
    <div className="auth__container">
      <div className="auth__container__inner">
        <div className="auth__container__inner__content">{children}</div>
        <div className="auth__container__inner__additional flex-center">
          <img src={feritLogoBijeli} alt="" />
          {additionalContent}
        </div>
      </div>
      <div className="rectangle__background__outer" />
    </div>
  );
}
