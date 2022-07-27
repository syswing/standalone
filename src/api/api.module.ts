import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from 'src/shared/http-error.filter';
import { CatsModule } from 'src/modules/cats/cats.module';
import { LoggingInterceptor } from 'src/shared/logging.interceptor';
import { AdventureModule } from 'src/modules/adventure/adventure.module';
import { QQMusicModule } from 'src/modules/qqmusic/qqmusic.module';
import { NeteaseMusicModule } from 'src/modules/neteasemusic/neteasemusic.module';

@Module({
  imports: [CatsModule,AdventureModule,QQMusicModule,NeteaseMusicModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [CatsModule,AdventureModule,NeteaseMusicModule,QQMusicModule],
})
export class ApiModule {}
