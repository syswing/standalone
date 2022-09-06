import { Controller, Get, Post, Req,Body, Query, UseInterceptors } from '@nestjs/common';
import {  ApiQuery,ApiTags } from '@nestjs/swagger';
import { ResultInterceptor } from 'src/interceptors/resultInterceptor.interceptor';
import { AdventureService } from './adventure.service';
@ApiTags('adventure')
@Controller('adventure')
@UseInterceptors(ResultInterceptor)
export class AdventureController {
	constructor(private readonly adventureService: AdventureService) {}
	@Get('list')
	@ApiQuery({ name:'page',type:'string',required:true})
	@ApiQuery({ name:'size',type:'string',required:true})
	list(@Query() query){
		return this.adventureService.adventureList(query)
	}
	// 创建文件
	@Post('add')
	@ApiQuery({ name:'content',type:'string',required:true})
	add(@Query() query){
		return this.adventureService.writeMd(query.content)
	}
}

