import { Controller, Get, Post, Req,Body, Query, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { OcrService } from './ocr.service';
import { ApiBody, ApiConsumes, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('ocr')
@Controller('ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @Post('ocr')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  ocr(@UploadedFile() file: Express.Multer.File, @Res() res) {
    return this.ocrService.ocr(file,res);  
  }

  @Post('ocrticket')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  ocrticket(@UploadedFile() file: Express.Multer.File, @Res() res) {
    return this.ocrService.ocrticket(file,res);  
  }
}
