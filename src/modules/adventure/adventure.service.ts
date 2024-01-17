import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import readFileTree, { DirObj } from 'src/utils/readFileTree';
import {readFile,writeFile} from 'node:fs/promises'
import * as MarkdownIt from 'markdown-it'
import * as path from 'path'
import * as toc from 'markdown-toc'
import { Repository } from 'typeorm';
import { Adventure } from './adventure.entity';
import { Tag } from '../tags/tag.entity';

const md = MarkdownIt()

@Injectable()
export class AdventureService {
	constructor(
		@Inject('ADVENTURE_REPOSITORY')
		private adventureRepository:Repository<Adventure>
	){}

	async adventureList({page,size}){
		const list = await this.adventureRepository.find({
			skip:(page - 1)*size,
			take:size,
			order:{
				id:'ASC'
			},
			where:{
				isPublish:true
			}
		})
		list.forEach((item:any) => {
			item.md = md.use(require("markdown-it-anchor")).render(item.content)
			const tocContent = md.render(toc(item.content).content)
			item.tocContent = tocContent
		})
		return list
	}
	
	async adminList({page,size}){
		const list = await this.adventureRepository.find({
			skip:(page - 1)*size,
			take:size,
			order:{
				id:'ASC'
			},
		})
		return list
	}

	async writeMd(query){
		const ad = new Adventure()
		ad.content = query.content
		ad.name = query.name
		ad.tag = query.tag
		ad.main_pic_id = query.mainPicId
		return await this.adventureRepository.save(ad)
	}

	async deleteMd(query){
		let targetMd = await this.adventureRepository.findOne({
      where: {
        id:query.id,
      },
    })
		return await this.adventureRepository.remove(targetMd)
	}

	async updateMd(query){
		let targetMd = await this.adventureRepository.findOne({
      where: {
        id:query.id,
      },
    })
		targetMd.content = query.content
		targetMd.name = query.name
		targetMd.tag = query.tag
		targetMd.main_pic_id = query.mainPicId
		return await this.adventureRepository.save(targetMd)
	}
	async zan(query){
		let targetMd = await this.adventureRepository.findOne({
      where: {
        id:query.id,
      },
    })
		targetMd.up++
		return await this.adventureRepository.save(targetMd)
	}
}
