import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AdventureController } from './adventure.controller';
import { AdventureProviders } from './adventure.provider';
import { AdventureService } from './adventure.service';
import { CommentModule } from '../comment/comment.module';
import { CommentProviders } from '../comment/comment.providers';

@Module({
  imports: [DatabaseModule],
  providers: [AdventureService, ...AdventureProviders, ...CommentProviders],
  controllers: [AdventureController],
  exports: [AdventureService],
})
export class AdventureModule {}
