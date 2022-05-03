import { FormEvent, ReactElement } from "react";

export interface SearchFormProps {
  searchText: string;
  date: string;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  additionalInputFields?: ReactElement;
  additionalButtons?: ReactElement;
}
