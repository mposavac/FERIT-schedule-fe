import { FormEvent, InputHTMLAttributes, ReactElement } from "react";

export interface SearchFormProps {
  searchText: string;
  handleSearch(): void;
  additionalInputFields?: ReactElement;
  additionalButtons?: ReactElement;
  children?: ReactElement;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  customField?: ReactElement;
  type?: string;
  value?: any;
  handleChange?(e: FormEvent<HTMLFormElement> | undefined): void;
}
