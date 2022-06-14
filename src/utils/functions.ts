import moment from "moment";
import { TimeSlots } from "../interfaces/responses.type";

export const capitalizeWords = (str: string): string | undefined | null => {
  if (str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let arrDashed = arr[i].split("-");
      if (arrDashed.length > 1) {
        for (let j = 0; j < arrDashed.length; j++) {
          arrDashed[j] =
            arrDashed[j].charAt(0).toUpperCase() +
            arrDashed[j].slice(1).toLocaleLowerCase();
        }
        arr[i] = arrDashed.join("-");
      } else {
        arr[i] =
          arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLocaleLowerCase();
      }
    }
    return arr.join(" ");
  } else return null;
};

export const calcPrecentage = (value1: number, value2: number) => {
  const num = (value1 / value2) * 100;
  return Math.round(num);
};

export const calcStatsData = (
  timeWhenAvailable: number,
  calendarEvents: any,
  type: string
) => {
  if (type === "availability") {
    let busyHours = 0;
    calendarEvents.forEach((events: any) => {
      const calendarEventsArr: TimeSlots[] = [...events.timeSlots];
      calendarEventsArr.forEach((value: TimeSlots) => {
        const startTime = moment(value["pocetak"], "HH:mm");
        const endTime = moment(value["kraj"], "HH:mm");
        busyHours += endTime.diff(startTime, "minutes");
      });
    });
    const roomUnvailable = calcPrecentage(busyHours, timeWhenAvailable);
    const roomAvailable = calcPrecentage(
      timeWhenAvailable - busyHours,
      timeWhenAvailable
    );
    return [roomAvailable, roomUnvailable];
  } else if (type === "staff") {
    let staffRoomUsage: any = [];
    calendarEvents.forEach((events: any) => {
      const calendarEventsArr: TimeSlots[] = [...events.timeSlots];

      const staffByRoom = Array.from(
        calendarEventsArr.map((value: TimeSlots) => {
          const startTime = moment(value["pocetak"], "HH:mm");
          const endTime = moment(value["kraj"], "HH:mm");
          return {
            nastavnik: capitalizeWords(value.nastavnik["#text"] || "Nepoznato"),
            slotDuration: Math.floor(endTime.diff(startTime, "minutes")),
          };
        })
      );
      staffRoomUsage.push(...staffByRoom);
    });
    staffRoomUsage = Array.from(
      staffRoomUsage
        .reduce(
          (a: any, b: any) =>
            a.set(b.nastavnik, (a.get(b.nastavnik) || 0) + b.slotDuration),
          new Map()
        )
        .entries(),
      (entry: any) => ({
        nastavnik: entry[0],
        slotDuration: entry[1],
      })
    );
    const roomInUsageTime = staffRoomUsage.reduce(
      (acc: number, obj: any) => acc + obj.slotDuration,
      0
    );
    return [staffRoomUsage, roomInUsageTime];
  }
  return [];
};
