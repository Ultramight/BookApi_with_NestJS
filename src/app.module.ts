import { Module } from '@nestjs/common';
import { LibriController } from './app.controller';
import { LibriService } from './app.service';

@Module({
  imports: [],
  controllers: [LibriController],
  providers: [LibriService],
})
export class AppModule {}
