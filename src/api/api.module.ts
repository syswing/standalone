import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from 'src/shared/http-error.filter';
import { CatsModule } from 'src/modules/cats/cats.module';
import { LoggingInterceptor } from 'src/shared/logging.interceptor';
import { AdventureModule } from 'src/modules/adventure/adventure.module';
import { QQMusicModule } from 'src/modules/qqmusic/qqmusic.module';
import { NeteaseMusicModule } from 'src/modules/neteasemusic/neteasemusic.module';
import { PictureModule } from 'src/modules/picture/picture.module';
import { RobotModule } from 'src/modules/robot/robot.module';
import { CommentModule } from 'src/modules/comment/comment.module';
import { UserModule } from 'src/modules/user/user.module';
import { TagModule } from 'src/modules/tags/tag.module';
import { BingPicModule } from 'src/modules/bingPic/bingPic.module';
import { WeatherModule } from 'src/modules/weather/weather.module';
import { RouteModule } from 'src/modules/routes/routes.module';
import { OcrModule } from 'src/modules/ocr/ocr.module';
const apiModules = [
  CatsModule,
  AdventureModule,
  QQMusicModule,
  NeteaseMusicModule,
  PictureModule,
  RobotModule,
  CommentModule,
  UserModule,
  TagModule,
  BingPicModule,
  WeatherModule,
  RouteModule,
  OcrModule,
]
@Module({
  imports: apiModules,
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
  exports: apiModules,
})
export class ApiModule {}
