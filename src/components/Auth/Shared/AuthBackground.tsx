import React from "react";
import { feritLogo } from "../../../styles/assets/images";

export default function AuthBackground({
  children,
}: JSX.ElementChildrenAttribute) {
  return (
    <div>
      <div className="container__inner">
        {children}
        <div className="rectangle__background__inner" />
        <img src={feritLogo} alt="" />
      </div>
      <div className="rectangle__background__outer" />
    </div>
  );
}
