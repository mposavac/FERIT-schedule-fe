import { RoomsResponse } from "../../../interfaces/responses.type";

export interface CalendarContainerProps {
  calendarEvents: RoomsResponse;
}

export interface CalendarpresenterProps {
  calendarEvents: CalendarEvent[];
  day: string;
  date: string;
}

export interface CalendarEvent {
  title: string;
  staff: string;
  timeInfo: string;
  classTypeColor: string;
  position: string;
  height: string;
}
