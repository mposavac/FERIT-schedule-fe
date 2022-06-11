import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarPresenter from "../CalendarPresenter/CalendarPresenter";
import { CalendarContainerProps, CalendarEvents } from "../types";

export default function CalendarContainer({
  calendarEvents,
  displayRoom,
}: CalendarContainerProps) {
  const [events, setEvents] = useState<CalendarEvents[]>();

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
    if (calendarEvents) {
      const modifiedEvents: any = [];
      calendarEvents.forEach((dailyEvents) => {
        const dayStart = moment("08:00", "HH:mm");
        const events = dailyEvents.timeSlots.map((event: any) => {
          const startTime = moment(event["pocetak"], "HH:mm");
          const endTime = moment(event["kraj"], "HH:mm");
          const position = `${
            (startTime.diff(dayStart, "minutes") / 15) * 12.5
          }px`;
          const height = `${
            (endTime.diff(startTime, "minutes") / 15) * 12.5
          }px`;
          return {
            title:
              displayRoom && event?.prostorija["#text"]
                ? event.predmet["#text"] +
                  " (" +
                  event?.prostorija["#text"] +
                  ")"
                : event.predmet["#text"],
            staff: event.nastavnik["#text"],
            timeInfo:
              startTime.format("HH:mm") + " - " + endTime.format("HH:mm"),
            classTypeColor: getClassTypeColor(event.vrstanastave["@tip"]),
            position,
            height,
          };
        });
        modifiedEvents.push({ date: dailyEvents.date, events });
      });
      setEvents(modifiedEvents);
    }
  }, [calendarEvents, displayRoom]);

  return calendarEvents && events ? (
    <CalendarPresenter calendarEvents={events} />
  ) : (
    <></>
  );
}
