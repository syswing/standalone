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
	@ApiQuery({ name:'tag',type:'string',required:true,description:'传id用逗号分隔'})
	@ApiQuery({ name:'mainPicId',type:'string'})
	add(@Body() body){
		return this.adventureService.writeMd(body)
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
	@ApiQuery({ name:'mainPicId',type:'string'})
	update(@Body() body){
		return this.adventureService.updateMd(body)
	}

	// 点赞
	@Post('zan')
	@ApiQuery({ name:'id',type:'string',required:true})
	zan(@Body() body){
		return this.adventureService.zan(body)
	}

	// 管理端列表
	@Get('adminList')
	@ApiQuery({ name:'page',type:'string',required:true})
	@ApiQuery({ name:'size',type:'string',required:true})
	adminList(@Query() query){
		return this.adventureService.adminList(query)
	}
	
	// 发布
	@Get('publish')
	@ApiQuery({ name:'id',type:'string',required:true})
	publish(@Query() query){
		return this.adventureService.publish(query)
	}

	// 发布
	@Get('unpublish')
	@ApiQuery({ name:'id',type:'string',required:true})
	unpublish(@Query() query){
		return this.adventureService.unpublish(query)
	}

	// 根据日期查询 yyy-mm-dd
	@Get('dayList')
	@ApiQuery({ name:'date',type:'string',required:true})
	dayList(@Query() query){
		return this.adventureService.dayList(query)
	}

	// 根据标签查询
	@Get('tagList')
	@ApiQuery({ name:'tag',type:'string',required:true,description:'传id用逗号分隔'})
	tagList(@Query() query){
		return this.adventureService.tagList(query)
	}
	

}

