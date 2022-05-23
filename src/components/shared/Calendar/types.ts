import { CalendarEventsResponse } from "../../../interfaces/responses.type";

export interface CalendarContainerProps {
  calendarEvents: CalendarEventsResponse | undefined;
  displayRoom?: boolean;
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
