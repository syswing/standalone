import { Controller, Get, Post, Query, Req, UseInterceptors } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";
import { CommentService } from "./comment.service";

@ApiTags('comment')
@Controller('comment')
@UseInterceptors(ResultInterceptor)
export class CommentController {
	constructor(private readonly commentService : CommentService){}

	@Get('list')
	@ApiQuery({ name:'page',type:'string',required:true})
	@ApiQuery({ name:'size',type:'string',required:true})
	getCommentList(@Query() query){
		return this.commentService.getCommentList(query)
	}

	@Post('save')
	@ApiQuery({ name:'content',type:'string',required:true})
	@ApiQuery({ name:'email',type:'string',required:true})
	@ApiQuery({ name:'nickname',type:'string',required:true})
	saveComment(@Query() query){
		return this.commentService.saveComment(query)
	}
}