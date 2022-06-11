import { FormEvent, ReactElement } from "react";

export interface SearchFormProps {
  searchText: string;
  date?: string;
  handleFormChange?(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  additionalInputFields?: ReactElement;
  additionalButtons?: ReactElement;
  children?: ReactElement;
}

export interface InputFieldProps {
  name: string;
  customField?: ReactElement;
  type?: string;
  value?: any;
  onChange?(e: FormEvent<HTMLFormElement> | undefined): void;
}
