import { Injectable, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { writeFile } from 'node:fs/promises';

@Injectable()
export class PictureService {
	async uploadPic(pic){
		await writeFile(`./pictures/${pic.originalname}`, pic.buffer);
		return '保存成功'
	}
	async getPic(query,res){
		const file = createReadStream(join(process.cwd(), `/pictures/${query.picName}`));
		file.pipe(res)
	}
}
