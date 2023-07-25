import { Module } from '@nestjs/common';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { DatabaseModule } from '../database/database.module';
import { PictureProviders } from './picture.provider';

@Module({
	imports:[DatabaseModule],
  providers: [PictureService,...PictureProviders],
  controllers: [PictureController],
})

export class PictureModule {}
