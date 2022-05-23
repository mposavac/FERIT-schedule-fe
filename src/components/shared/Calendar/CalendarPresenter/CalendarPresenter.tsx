import React from "react";
import { useTranslation } from "../../../../context";
import { CalendarEvent, CalendarpresenterProps } from "../types";
import "./CalendarPresenter.scss";

export default function CalendarPresenter({
  calendarEvents,
  day,
  date,
}: CalendarpresenterProps) {
  const { t } = useTranslation();

  const renderHours = (startTime: string, endTime: string) => (
    <div className="calendar__container__hours__field">
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  );

  const renderBlock = (event: CalendarEvent, i: number) => (
    <div
      key={i}
      className="block"
      style={{
        top: event.position,
        height: event.height,
        background: event.classTypeColor,
      }}
    >
      <p className="title">{event.title}</p>
      <p className="employee">{event.staff}</p>
      <p className="time">{event.timeInfo}</p>
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
      <div className="calendar__container__day">
        <div className="calendar__container__day__name">
          <p>{t(day)}</p>
          <p>{t(date)}</p>
        </div>
        <div className="calendar__container__day__blocks">
          {calendarEvents.map((event: CalendarEvent, i: number) =>
            renderBlock(event, i)
          )}
        </div>
      </div>
    </div>
  );
}
