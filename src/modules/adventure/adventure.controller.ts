import { Controller, Get, Post, Req,Body, Query, UseInterceptors } from '@nestjs/common';
import {  ApiQuery,ApiTags } from '@nestjs/swagger';
import { ResultInterceptor } from 'src/interceptors/resultInterceptor.interceptor';
import { AdventureService } from './adventure.service';
@ApiTags('adventure')
@Controller('adventure')
@UseInterceptors(ResultInterceptor)
export class AdventureController {
	// private readonly adventureService:AdventureService
	constructor(private readonly adventureService: AdventureService) {}
	@Get('scan')
	scan(){
		return this.adventureService.adventureList()
	}

	@Get('md')
	@ApiQuery({ name:'mdName',type:'string',required:false})
	@ApiQuery({ name:'ino',type:'string',required:false})
	md(@Query() query){
		return this.adventureService.findAdventure(query.ino,query.mdName)
	}

	@Get('read')
	@ApiQuery({ name:'filePath',type:'string',required:true})
	read(@Query() query){
		return this.adventureService.readMd(query.filePath)
	}
	// 创建文件
	@Post('add')
	@ApiQuery({ name:'content',type:'string',required:true})
	@ApiQuery({ name:'dir',type:'string',required:true})
	add(@Query() query){
		return this.adventureService.writeMd(query.content,'/dir3/test6.md')
	}
}

