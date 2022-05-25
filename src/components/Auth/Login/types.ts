import { FormEvent } from "react";
import { LoginForm } from "../../../interfaces/auth.types";

export interface LoginPresenterProps {
  values: LoginForm;
  handleChange(e: any): void;
  submit(e: FormEvent<HTMLFormElement> | undefined): void;
}
