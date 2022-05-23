import { FormEvent } from "react";
import { RoomsForm } from "../../../interfaces/forms.type";
import { CalendarEventsResponse } from "../../../interfaces/responses.type";
import { InputSelectOption } from "../../shared/InputSelect/types";

export interface RoomsFormProps {
  values: RoomsForm;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  buildingsOptions: InputSelectOption[];
  roomsOptions: InputSelectOption[];
  isThereCalendarEvents: boolean;
  toggleStatsOverlay(): void;
}

export interface RoomsPresenterProps {
  values: RoomsForm;
  calendarEvents: CalendarEventsResponse | undefined;
  handleFormChange(e: FormEvent<HTMLFormElement> | undefined): void;
  handleSearch(): void;
  toggleStatsOverlay(): void;
  isStatsOpen: boolean;
  buildingsOptions: InputSelectOption[];
  roomsOptions: InputSelectOption[];
}

export interface StatisticsContainerProps {
  toggleStatsOverlay(): void;
  calendarEvents: CalendarEventsResponse | undefined;
}

export interface StatisticsPresenterProps {
  toggleStatsOverlay(): void;
  toggleStatsType(value: string): void;
  statsType: string;
  statsData: StatisticsData[];
}

export interface StatisticsData {
  x: number;
  y: number;
  label: string;
}

export interface StaffTimeSlotData {
  nastavnik: string;
  slotDuration: number;
}
