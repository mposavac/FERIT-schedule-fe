import { FormEvent } from "react";
import { RoomsForm } from "../../../interfaces/forms.type";
import { RoomsResponse } from "../../../interfaces/responses.type";
import { InputSelectOption } from "../../shared/InputSelect/types";

export interface RoomsFormPresenterProps {
  values: RoomsForm;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  buildingOptions: InputSelectOption[];
  roomsOptions: InputSelectOption[];
  isThereCalendarEvents: boolean;
  toggleStatsOverlay(): void;
}

export interface RoomsPresenterProps {
  values: RoomsForm;
  calendarEvents: RoomsResponse | undefined;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  toggleStatsOverlay(): void;
  isStatsOpen: boolean;
}

export interface StatisticsContainerProps {
  toggleStatsOverlay(): void;
  calendarEvents: RoomsResponse | undefined;
}

export interface StatisticsPresenterProps {
  toggleStatsOverlay(): void;
  toggleStatsType(value: string): void;
  statsType: string;
  statsData: any;
}
