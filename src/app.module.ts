import { Module } from '@nestjs/common';
import { LibriController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [LibriController],
  providers: [AppService],
})
export class AppModule {}
