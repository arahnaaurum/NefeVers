export enum Char {
  NEF = "nefermaat",
  NEI = "neight",
  UNO = "unnefer",
  SEL = "selkhet",
  LAR = "lara"
}

export interface Question {
  id: number;
  text: string;
}

export interface Answer {
  id: number;
  text: string;
  image: string;
  char: Char;
}


export interface Result {
  id: Char;
  name: string;
  text: string;
  image?: string;
}

