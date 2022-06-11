import moment from "moment";
import React from "react";
import { useTranslation } from "../../../../../context";
import { CalendarEvent, DayPresenterProps } from "../../types";

export default function DayPresenter({ dailyProps }: DayPresenterProps) {
  const { t } = useTranslation();

  const renderBlock = (event: CalendarEvent, i: number) => (
    <div
      key={"ceblock" + i}
      className="block flex-center"
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
    <div className="calendar__container__day">
      <div className="calendar__container__day__name flex-center">
        <p>{t(moment(dailyProps.date).format("dddd"))}</p>
        <p>{moment(dailyProps.date).format("DD.MM.YYYY.")}</p>
      </div>
      <div className="calendar__container__day__blocks">
        {dailyProps.events.map((event: CalendarEvent, i: number) =>
          renderBlock(event, i)
        )}
      </div>
    </div>
  );
}
