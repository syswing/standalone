import { Module } from '@nestjs/common';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';

@Module({
  providers: [PictureService],
  controllers: [PictureController],
})

export class PictureModule {}
