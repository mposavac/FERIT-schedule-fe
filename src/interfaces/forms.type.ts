export interface RoomsForm {
  startDate: string;
  endDate: string;
  building: { text: string; value: string };
  room: { text: string; value: string };
}

export interface StaffForm {
  date: string;
  employee: { text: string; value: string };
}

export interface SchedulerForm {
  date: string;
  startTime: string;
  endTime: string;
  capacity: number;
}
