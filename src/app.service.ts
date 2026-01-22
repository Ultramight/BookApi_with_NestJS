import { Injectable } from '@nestjs/common';
import { Libro, LIBRI } from './fakedatabase';

@Injectable()
export class LibriService {
  getTuttiLibri(): Libro[] {
    return LIBRI;
  }
  cerca_ID(Id_Libro: number): Libro | undefined {
    return LIBRI.find((libro) => libro.id === Id_Libro);
  }
}
