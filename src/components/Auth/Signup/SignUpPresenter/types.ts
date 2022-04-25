import { FormEvent } from "react";
import { SignUpForm } from "../../../../interfaces/auth.types";

export interface SignUpPresenterProps {
  values: SignUpForm;
  handleChange(e: any): void;
  submit(e: FormEvent<HTMLFormElement> | undefined): void;
}
