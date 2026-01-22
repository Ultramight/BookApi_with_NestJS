import { Controller, Get } from '@nestjs/common';
import { LibriService } from './app.service';
import { Libro } from './fakedatabase';

@Controller('libri')
//sostituito il nome del controller AppController con uno più appropriato
export class LibriController {
  constructor(private readonly LibriService: LibriService) {}

  @Get()
  getTuttiLibri(): Libro[] {
    return this.LibriService.getTuttiLibri();
  }
}
