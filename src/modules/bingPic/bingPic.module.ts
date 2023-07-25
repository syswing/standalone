import { Module } from '@nestjs/common';
import { BingPicController } from './bingPic.controller';
import { BingPicService } from './bingPic.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.registerAsync({
		useFactory: () => ({
			timeout: 5000,
			maxRedirects: 5,
			baseURL:'http://127.0.0.1:3300',
		}),
	})],
  providers: [BingPicService],
  controllers: [BingPicController],
})
export class BingPicModule {}