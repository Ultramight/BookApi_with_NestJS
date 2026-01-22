import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('libri')
//sostituito il nome del controller AppController con uno più appropriato
export class LibriController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
