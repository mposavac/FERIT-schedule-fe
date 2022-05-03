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

export interface BuildingsOptionsResponse {
  id: string;
  naziv: string;
  prostorije: RoomsInfo[];
}

export interface RoomsInfo {
  "-id": string;
  ime: string;
  opis: string;
  kapacitet: string;
  covidkap: string;
  zgrada: string;
  tip: string;
  zanastavu: string;
  kvadratura: string;
  napomena: any;
  zaduzenja: any;
}
