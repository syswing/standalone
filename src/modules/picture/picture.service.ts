import { Inject, Injectable, Res } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { writeFile } from 'node:fs/promises';
import { Picture } from './picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @Inject('PICTURE_REPOSITORY')
    private pictureRepository: Repository<Picture>,
  ) {}
  async uploadPic(pic) {
    const picture = new Picture();
    picture.path = `./pictures/${pic.originalname}`;
    await this.pictureRepository.save(picture);
    await writeFile(`./pictures/${pic.originalname}`, pic.buffer);
    return '保存成功';
  }
  async getPic(query, res) {
    const pic = await this.pictureRepository.findOne({
      where: {
        path: `./pictures/${query.picName}`,
      },
    });
    if (pic) {
			console.log('createReadStream')
      const file = fs.createReadStream(
        join(process.cwd(), `/pictures/${query.picName}`),
      );
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader(
        'Content-Disposition',
        `attachment;filename=${query.picName}`,
      );
      file.pipe(res);
    } else {
			res.send({
				data:"未找到文件",
				result:0
			})
    }
  }
}
