export interface RoomsResponse {
  date: Date;
  timeSlots: TimeSlots[];
}

export interface TimeSlots {
  "@id": string;
  "@idblok": string;
  dodatniopis: any;
  grupastudenata: any;
  kraj: string;
  nastavnik: any;
  odradjeno: string;
  planirano: string;
  pocetak: string;
  predmet: any;
  prostorija: any;
  smjer: any;
  vrstanastave: any;
}
