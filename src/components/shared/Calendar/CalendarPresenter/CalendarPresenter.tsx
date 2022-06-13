import React from "react";
import { arrowIcon } from "../../../../styles/assets/images";
import { CalendarEvents, CalendarPresenterProps } from "../types";
import "./CalendarPresenter.scss";
import DayPresenter from "./DayPresenter/DayPresenter";

export default function CalendarPresenter({
  calendarEvents,
  chunkSize,
  transformOffset,
  handleCalendarMove,
}: CalendarPresenterProps) {
  const renderHours = (startTime: string, endTime: string) => (
    <div className="calendar__container__content__hours__field">
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  );

  return (
    <div className="calendar__container">
      <div className="calendar__container__navigation">
        <img
          className={`left ${transformOffset === 0 ? "disabled" : ""}`}
          src={arrowIcon}
          alt="arrow"
          onClick={() => handleCalendarMove("left")}
        />
        <img
          className={`right ${
            calendarEvents?.length * 265 <
            transformOffset * -1 + chunkSize * 265
              ? "disabled"
              : ""
          }`}
          src={arrowIcon}
          alt="arrow"
          onClick={() => handleCalendarMove("right")}
        />
      </div>
      <div className="calendar__container__content">
        <div className="calendar__container__content__hours">
          {renderHours("8:00", "9:30")}
          {renderHours("9:45", "11:15")}
          {renderHours("11:30", "13:00")}
          {renderHours("13:15", "14:45")}
          {renderHours("15:00", "16:30")}
          {renderHours("16:45", "18:15")}
          {renderHours("18:30", "20:00")}
          {renderHours("20:15", "21:45")}
        </div>
        <div
          className="calendar__container__content__days__wrapper__outer"
          style={{ width: `${chunkSize * 265 - 15}px` }}
        >
          <div
            className="calendar__container__content__days__wrapper__inner"
            style={{ transform: `translateX(${transformOffset}px)` }}
          >
            {calendarEvents.map((events: CalendarEvents, i: number) => (
              <DayPresenter key={i} dailyProps={events} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
