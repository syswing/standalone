import { Controller, Get, Post, Req,Body, Query } from '@nestjs/common';
import { NeteaseMusicService } from './neteasemusic.service';
import { ApiBody, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('neteasemusic')
@Controller('neteasemusic')
export class NeteaseMusicController {
	constructor(private readonly neteaseMusicService: NeteaseMusicService) {}

	@Post('login_cellphone')
	@ApiQuery({ name:'phone',type:'string',required:true})
	@ApiQuery({ name:'password',type:'string',required:true})
	login_cellphone(@Query() query){
		return this.neteaseMusicService.login_cellphone(query)
	}

	@Post('user_detail')
	@ApiQuery({ name:'uid',type:'string',required:true})
	user_detail(@Query() query){
		return this.neteaseMusicService.user_detail(query)
	}

	@Post('song_url')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'br',type:'string',required:false})
	song_url(@Query() query){
		return this.neteaseMusicService.song_url(query)
	}

	@Post('check_music')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'br',type:'string',required:false})
	check_music(@Query() query){
		return this.neteaseMusicService.check_music(query)
	}
	@Post('playlist_detail')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'s',type:'string',required:false})
	playlist_detail(@Query() query){
		return this.neteaseMusicService.playlist_detail(query)
	}

	@Post('user_playlist')
	@ApiQuery({ name:'uid',type:'string',required:true})
	user_playlist(@Query() query){
		return this.neteaseMusicService.user_playlist(query)
	}
	@Post('playlist_track_all')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'s',type:'string',required:false})
	playlist_track_all(@Query() query){
		return this.neteaseMusicService.playlist_track_all(query)
	}

	@Post('likelist')
	@ApiQuery({ name:'uid',type:'string',required:true})
	likelist(@Query() query){
		return this.neteaseMusicService.likelist(query)
	}
	
	@Post('song_detail')
	@ApiQuery({ name:'ids',type:'string',required:true})
	song_detail(@Query() query){
		return this.neteaseMusicService.song_detail(query)
	}
}

