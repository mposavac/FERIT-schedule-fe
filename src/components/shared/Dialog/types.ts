import { ReactElement } from "react";

export interface DialogContainerProps {
  children: ReactElement;
  isOpen: boolean;
  toggleDialog(): void;
  height?: string;
  width?: string;
}

export interface DialogPresenterProps {
  children: ReactElement;
  toggleDialog(): void;
  height?: string;
  width?: string;
}
