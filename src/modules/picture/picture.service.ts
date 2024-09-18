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
  
  private commonUrl = './public/pictures/'
  
  async uploadPic(pic) {
    const picture = new Picture();
    picture.path = `${this.commonUrl}${pic.originalname}`;
    picture.name = pic.originalname
    await this.pictureRepository.save(picture);
    await writeFile(`${this.commonUrl}${pic.originalname}`, pic.buffer);
    return pic.originalname;
  }
  async getPic(query, res) {
    const pic = await this.pictureRepository.findOne({
      where: {
        path: `${this.commonUrl}${query.picName}`,
      },
    });
    if (pic) {
      const file = fs.createReadStream(
        join(process.cwd(), `${this.commonUrl}${query.picName}`),
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
  async getPicPage({page,size}){
    const pics = await this.pictureRepository.find({
      skip:page-1,
      take:size,
      order:{
        id:'ASC'
      }
    })
    return pics
  }
  async deletePic(pic){
    const targetPic = await this.pictureRepository.findOne({
      where:{
        id:pic.id
      }
    })
    return await this.pictureRepository.remove(targetPic)
  }
}
