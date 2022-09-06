import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { CatsService } from './modules/cats/cats.service';
@Module({
  imports: [
    ApiModule,
  ],
  controllers: [AppController,],
  providers: [AppService, CatsService],
})
export class AppModule {}
