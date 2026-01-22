import { Injectable } from '@nestjs/common';
import { Libro, LIBRI } from './fakedatabase';

@Injectable()
export class LibriService {
  getTuttiLibri(): Libro[] {
    return LIBRI;
  }
}
