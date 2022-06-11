import React from "react";
import { CalendarEvents, CalendarPresenterProps } from "../types";
import "./CalendarPresenter.scss";
import DayPresenter from "./DayPresenter/DayPresenter";

export default function CalendarPresenter({
  calendarEvents,
}: CalendarPresenterProps) {
  const renderHours = (startTime: string, endTime: string) => (
    <div className="calendar__container__hours__field">
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  );

  return (
    <div className="calendar__container">
      <div className="calendar__container__hours">
        {renderHours("8:00", "9:30")}
        {renderHours("9:45", "11:15")}
        {renderHours("11:30", "13:00")}
        {renderHours("13:15", "14:45")}
        {renderHours("15:00", "16:30")}
        {renderHours("16:45", "18:15")}
        {renderHours("18:30", "20:00")}
        {renderHours("20:15", "21:45")}
      </div>
      {calendarEvents.map((events: CalendarEvents, i: number) => (
        <DayPresenter dailyProps={events} />
      ))}
    </div>
  );
}
