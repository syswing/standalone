import { Module } from '@nestjs/common';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { DatabaseModule } from '../database/database.module';
import { PictureProviders } from './picture.provider';
import { AdventureModule } from '../adventure/adventure.module';

@Module({
	imports:[DatabaseModule,AdventureModule],
  providers: [PictureService,...PictureProviders],
  controllers: [PictureController],
})

export class PictureModule {}
