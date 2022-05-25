import React from "react";
import { crossIcon } from "../../../../styles/assets/images";
import { DialogPresenterProps } from "../types";
import "./DialogPresenter.scss";

export default function DialogPresenter({
  children,
  toggleDialog,
  height,
  width,
}: DialogPresenterProps) {
  return (
    <div className="dialog__wrapper flex-center">
      <div className="dialog__wrapper__background" onClick={toggleDialog} />
      <div
        className="dialog__wrapper__container flex-center"
        style={{ height: height, width: width }}
      >
        <div className="dialog__wrapper__container__close__container">
          <img src={crossIcon} alt="" onClick={toggleDialog} />
        </div>
        {children}
      </div>
    </div>
  );
}
