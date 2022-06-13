import { FormEvent } from "react";
import { StaffForm } from "../../interfaces/forms.type";
import {
  CalendarEventsResponse,
  StaffOptionsResponse,
} from "../../interfaces/responses.type";
import { InputSelectOption } from "../shared/InputSelect/types";

export interface StaffPresenterProps {
  values: StaffForm;
  calendarEvents: CalendarEventsResponse[] | undefined;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  toggleStaffInfo(): void;
  staffOptions: InputSelectOption[];
  selectedEmployee: StaffOptionsResponse | undefined;
  isStaffInfoOpen: boolean;
}

export interface StaffFormProps {
  values: StaffForm;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  staffOptions: InputSelectOption[];
  toggleStaffInfo(): void;
  isThereCalendarEvents: boolean;
}

export interface StaffInfoOverlayProps {
  selectedEmployee: StaffOptionsResponse;
  toggleStaffInfo(): void;
}
