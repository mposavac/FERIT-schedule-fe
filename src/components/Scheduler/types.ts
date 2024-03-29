import { FormEvent } from "react";
import { SchedulerForm } from "../../interfaces/forms.type";

export interface SchedulerPresenterProps {
  values: SchedulerForm;
  availability: any;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
}

export interface SchedulerFormProps {
  values: SchedulerForm;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
}
