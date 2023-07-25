import { Controller, Get, Post, Query, UseInterceptors } from "@nestjs/common";
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
	add(@Query() query){
		return this.tagService.addTag(query)
	}

	//taglist
	@Get('list')
	list(){
		return this.tagService.list()
	}
}
