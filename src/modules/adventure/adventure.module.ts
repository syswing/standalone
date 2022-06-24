import { Module } from '@nestjs/common';
import { AdventureController } from './adventure.controller';
import { AdventureService } from './adventure.service';

@Module({
  providers: [AdventureService],
  controllers: [AdventureController],
})
export class AdventureModule {}
