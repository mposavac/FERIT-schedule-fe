import { FormEvent } from "react";
import { RoomsForm } from "../../../interfaces/forms.type";
import { InputSelectOption } from "../../shared/InputSelect/types";

export interface RoomsFormPresenterProps {
  values: RoomsForm;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  buildingOptions: InputSelectOption[];
  roomsOptions: InputSelectOption[];
}

export interface RoomsPresenterProps {
  values: RoomsForm;
  calendarEvents: any;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
}
