import { Module } from '@nestjs/common';
import { QQMusicController } from './qqmusic.controller';
import { QQMusicService } from './qqmusic.service';
import { HttpModule } from '@nestjs/axios';

@Module({
	imports: [HttpModule.registerAsync({
		useFactory: () => ({
			timeout: 5000,
			maxRedirects: 5,
			baseURL:'http://127.0.0.1:3300',
			withCredentials:true
		}),
	})],
  providers: [QQMusicService],
  controllers: [QQMusicController],
})

export class QQMusicModule {}
