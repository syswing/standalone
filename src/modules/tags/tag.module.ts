import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TagController } from './tag.controller';
import { TagProviders } from './tag.provider';
import { TagService } from './tag.service';

@Module({
	imports:[DatabaseModule],
  providers: [TagService,...TagProviders],
  controllers: [TagController],
})
export class TagModule {}
