export interface DialogContainerProps {
  children: JSX.Element;
  isOpen: boolean;
  toggleDialog(): void;
  height?: string;
  width?: string;
}

export interface DialogPresenterProps {
  children: JSX.Element;
  toggleDialog(): void;
  height?: string;
  width?: string;
}
