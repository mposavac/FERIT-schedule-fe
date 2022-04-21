import { FormEvent } from "react";
import { LoginForm } from "../../../../hooks/types";

export interface LoginPresenterProps {
  values: LoginForm;
  handleChange(e: any): void;
  submit(e: FormEvent<HTMLFormElement> | undefined): void;
}
