import { Body, Controller, Get, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";
import { TagService } from "./tag.service";

@ApiTags('tags')
@Controller('tags')
@UseInterceptors(ResultInterceptor)
export class TagController {
	constructor(private readonly tagService: TagService) {}

	// 创建tag
	@Post('add')
	@ApiQuery({ name:'ch',type:'string',required:true})
	@ApiQuery({ name:'en',type:'string',required:true})
	add(@Body() body){
		return this.tagService.addTag(body)
	}

	//taglist
	@Get('list')
	list(){
		return this.tagService.list()
	}

	// 删除
	@Post('delete')
	@ApiQuery({ name:'id',type:'string',required:true})
	delete(@Body() body){
		return this.tagService.delTag(body)
	}

	// 编辑
	@Post('edit')
	@ApiQuery({ name:'id',type:'string',required:true})
	@ApiQuery({ name:'ch',type:'string'})
	@ApiQuery({ name:'en',type:'string'})
	edit(@Body() body){
		return this.tagService.editTag(body)
	}
}
