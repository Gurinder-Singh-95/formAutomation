import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormService } from './form/form.service';
import { FormController } from './form/form.controller';

@Module({
  imports: [],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}
