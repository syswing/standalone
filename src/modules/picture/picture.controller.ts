import { Controller, Get, Post, Req, Body, Query, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PictureService } from './picture.service'
import { ResultInterceptor } from 'src/interceptors/resultInterceptor.interceptor';

@ApiTags('picture')
@Controller('picture')
@UseInterceptors(ResultInterceptor)
export class PictureController {
	constructor(private readonly pictureService: PictureService) {}

	@Post('upload')
	@ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
	@UseInterceptors(FileInterceptor('file'))
	upload(@UploadedFile() file: Express.Multer.File) {
	  return this.pictureService.uploadPic(file)
	}

	@Get('getPic')
	@ApiQuery({ name:'picName',type:'string',required:true})
	getPic(@Query() query,@Res() res){
		return this.pictureService.getPic(query,res)
	}
}
