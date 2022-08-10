import { Controller, Get, Post, Req, Body, Query, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PictureService } from './picture.service'

@ApiTags('picture')
@Controller('picture')
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
	  this.pictureService.uploadPic(file)
	}

	@Get()
	@ApiQuery({ name:'picName',type:'string',required:true})
	getPic(@Query() query,@Res() res){
		this.pictureService.getPic(query,res)
	}
}
