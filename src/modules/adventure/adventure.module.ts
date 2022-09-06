import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AdventureController } from './adventure.controller';
import { AdventureProviders } from './adventure.provider';
import { AdventureService } from './adventure.service';

@Module({
	imports:[DatabaseModule],
  providers: [AdventureService,...AdventureProviders],
  controllers: [AdventureController],
})
export class AdventureModule {}
