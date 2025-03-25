import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RouteController } from './routes.controller';
import { RouteProviders } from './routes.provider';
import { RouteService } from './routes.service';

@Module({
	imports:[DatabaseModule],
	providers:[RouteService,...RouteProviders],
  controllers: [RouteController],
})
export class RouteModule {}

