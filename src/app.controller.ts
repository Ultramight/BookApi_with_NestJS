import { Controller, Get, Param } from '@nestjs/common';
import { LibriService } from './app.service';
import { Libro } from './fakedatabase';

@Controller('libri')
export class LibriController {
  constructor(private readonly LibriService: LibriService) {}

  @Get()
  getTuttiLibri(): Libro[] {
    return this.LibriService.getTuttiLibri();
  }
  /* TESTING http://localhost:3000/LIBRI/GetById/1 per trovare il libro con ID 1 
   - importato Param nei @nestjs/common */

  @Get('GetById/:id')
  getLibroById(@Param('id') id: string): Libro | undefined {
    const Id_Libro = +id;
    return this.LibriService.cerca_ID(Id_Libro);
  }
}
