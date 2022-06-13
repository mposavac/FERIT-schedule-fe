import { CalendarEventsResponse } from "../../../interfaces/responses.type";

export interface CalendarContainerProps {
  calendarEvents: CalendarEventsResponse[] | undefined;
  displayRoom?: boolean;
}

export interface CalendarPresenterProps {
  calendarEvents: CalendarEvents[];
  chunkSize: number;
  transformOffset: number;
  handleCalendarMove(direction: string): void;
}

export interface DayPresenterProps {
  dailyProps: CalendarEvents;
}

export interface CalendarEvents {
  date: string;
  events: CalendarEvent[];
}

export interface CalendarEvent {
  title: string;
  staff: string;
  timeInfo: string;
  classTypeColor: string;
  position: string;
  height: string;
}
