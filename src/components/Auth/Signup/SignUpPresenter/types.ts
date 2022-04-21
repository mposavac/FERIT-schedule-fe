import { FormEvent } from "react";
import { SignUpForm } from "../../../../hooks/types";

export interface SignUpPresenterProps {
  values: SignUpForm;
  handleChange(e: any): void;
  submit(e: FormEvent<HTMLFormElement> | undefined): void;
}
