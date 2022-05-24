import React from "react";
import DialogPresenter from "../DialogPresenter/DialogPresenter";
import { DialogContainerProps } from "../types";

export default function DialogContainer({
  children,
  isOpen,
  toggleDialog,
  height,
  width,
}: DialogContainerProps) {
  return isOpen ? (
    <DialogPresenter
      children={children}
      toggleDialog={toggleDialog}
      height={height}
      width={width}
    />
  ) : (
    <></>
  );
}
