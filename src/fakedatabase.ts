// fakedatabase.ts

export interface Libro {
  id: number;
  titolo: string;
  autore: string;
  annoPubblicazione: number;
}

export const LIBRI: Libro[] = [
  {
    id: 1,
    titolo: 'Il nome della rosa',
    autore: 'Umberto Eco',
    annoPubblicazione: 1980,
  },
  {
    id: 2,
    titolo: '1984',
    autore: 'George Orwell',
    annoPubblicazione: 1949,
  },
  {
    id: 3,
    titolo: 'Il signore degli anelli',
    autore: 'J.R.R. Tolkien',
    annoPubblicazione: 1954,
  },
  {
    id: 4,
    titolo: 'Orgoglio e pregiudizio',
    autore: 'Jane Austen',
    annoPubblicazione: 1813,
  },
  {
    id: 5,
    titolo: 'Il piccolo principe',
    autore: 'Antoine de Saint-Exupéry',
    annoPubblicazione: 1943,
  },
  {
    id: 6,
    titolo: 'Harry Potter e la pietra filosofale',
    autore: 'J.K. Rowling',
    annoPubblicazione: 1997,
  },
  {
    id: 7,
    titolo: 'Fahrenheit 451',
    autore: 'Ray Bradbury',
    annoPubblicazione: 1953,
  },
  {
    id: 8,
    titolo: 'Il codice Da Vinci',
    autore: 'Dan Brown',
    annoPubblicazione: 2003,
  },
  {
    id: 9,
    titolo: 'Don Chisciotte della Mancia',
    autore: 'Miguel de Cervantes',
    annoPubblicazione: 1605,
  },
  {
    id: 10,
    titolo: 'La divina commedia',
    autore: 'Dante Alighieri',
    annoPubblicazione: 1321,
  },
];
