import { Controller, Get, Post, Query, Body, UseInterceptors } from '@nestjs/common';
import { ApiQuery, ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { ResultInterceptor } from 'src/interceptors/resultInterceptor.interceptor';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
@ApiTags('comment')
@Controller('comment')
@UseInterceptors(ResultInterceptor)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('list')
  @ApiQuery({ name: 'page', type: 'string', required: true })
  @ApiQuery({ name: 'size', type: 'string', required: true })
  @ApiQuery({ name: 'reply', type: 'string' })
  getCommentList(@Query() query) {
    return this.commentService.getCommentList(query);
  }


  @Post('save')
  @ApiBody({ type: Comment })
  saveComment(@Body() createCommentDto: Comment) {
    console.log(createCommentDto);
    return this.commentService.saveComment(createCommentDto);
  }

  @Post('delete')
  @ApiOperation({ summary: '删除评论' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
      },
    },
  })
  async delete(@Body('id') id: number) {
    return await this.commentService.delComment({ id });
  }
}
