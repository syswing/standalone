import { Controller, Get, Post, Req,Body, Query, UseInterceptors } from '@nestjs/common';
import {  ApiQuery,ApiTags } from '@nestjs/swagger';
import { ResultInterceptor } from 'src/interceptors/resultInterceptor.interceptor';
import { AdventureService } from './adventure.service';
@ApiTags('adventure')
@Controller('adventure')
@UseInterceptors(ResultInterceptor)
export class AdventureController {
	constructor(private readonly adventureService: AdventureService) {}

	// 获取列表
	@Get('list')
	@ApiQuery({ name:'page',type:'string',required:true})
	@ApiQuery({ name:'size',type:'string',required:true})
	list(@Query() query){
		return this.adventureService.adventureList(query)
	}

	// 创建md
	@Post('add')
	@ApiQuery({ name:'content',type:'string',required:true})
	@ApiQuery({ name:'name',type:'string',required:true})
	@ApiQuery({ name:'tag',type:'string',required:true})
	add(@Query() query){
		return this.adventureService.writeMd(query)
	}

	// 删除md
	@Post('delete')
	@ApiQuery({ name:'id',type:'string',required:true})
	delete(@Query() query){
		return this.adventureService.deleteMd(query)
	}

	// 更新md
	@Post('update')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'content',type:'string'})
	@ApiQuery({ name:'name',type:'string'})
	@ApiQuery({ name:'tag',type:'string'})
	update(@Query() query){
		return this.adventureService.updateMd(query)
	}

	// 点赞
	@Post('zan')
	@ApiQuery({ name:'id',type:'string',required:true})
	zan(@Query() query){
		return this.adventureService.zan(query)
	}

	
}

