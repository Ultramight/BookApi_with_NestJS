// fakedatabase.ts

export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    publicationYear: 1980,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    publicationYear: 1949,
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publicationYear: 1954,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
  },
  {
    id: 5,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    publicationYear: 1943,
  },
  {
    id: 6,
    title: 'Harry Potter and the Philosopher Stone',
    author: 'J.K. Rowling',
    publicationYear: 1997,
  },
  {
    id: 7,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publicationYear: 1953,
  },
  {
    id: 8,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publicationYear: 2003,
  },
  {
    id: 9,
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    publicationYear: 1605,
  },
  {
    id: 10,
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    publicationYear: 1321,
  },
];
