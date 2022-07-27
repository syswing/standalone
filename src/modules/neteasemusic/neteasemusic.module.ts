import { Module } from '@nestjs/common';
import { NeteaseMusicController } from './neteasemusic.controller';
import { NeteaseMusicService } from './neteasemusic.service';

@Module({
  providers: [NeteaseMusicService],
  controllers: [NeteaseMusicController],
})

export class NeteaseMusicModule {}
