import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarPresenter from "../CalendarPresenter/CalendarPresenter";
import { CalendarContainerProps, CalendarEvent } from "../types";

export default function CalendarContainer({
  calendarEvents,
}: CalendarContainerProps) {
  const [events, setEvents] = useState<CalendarEvent[]>();

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case "0":
        return "#eee"; //nepotnato
      case "1":
        return "#E1FADF"; //predavanje
      case "2":
        return "#FFFEB6"; //KV?
      case "3":
        return "#CDDEFF"; //AV
      case "4":
        return "#FFD9C9"; //LV
      default:
        return "#fff";
    }
  };
  useEffect(() => {
    //console.log({ calendarEvents });
    if (calendarEvents && calendarEvents.timeSlots) {
      const dayStart = moment("08:00", "HH:mm");
      const events = calendarEvents.timeSlots.map((event: any) => {
        const startTime = moment(event["pocetak"], "HH:mm");
        const endTime = moment(event["kraj"], "HH:mm");
        const position = `${
          (startTime.diff(dayStart, "minutes") / 15) * 12.5
        }px`;
        const height = `${(endTime.diff(startTime, "minutes") / 15) * 12.5}px`;
        return {
          title: event.predmet["#text"],
          staff: event.nastavnik["#text"],
          timeInfo: startTime.format("HH:mm") + " - " + endTime.format("HH:mm"),
          classTypeColor: getClassTypeColor(event.vrstanastave["@tip"]),
          position,
          height,
        };
      });
      setEvents(events);
    }
  }, [calendarEvents]);

  return calendarEvents && events ? (
    <CalendarPresenter
      calendarEvents={events}
      day={moment(calendarEvents.date).format("dddd")}
      date={moment(calendarEvents.date).format("DD.MM.YYYY.")}
    />
  ) : (
    <></>
  );
}
