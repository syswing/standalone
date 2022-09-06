import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import readFileTree, { DirObj } from 'src/utils/readFileTree';
import {readFile,writeFile} from 'node:fs/promises'
import * as MarkdownIt from 'markdown-it'
import * as path from 'path'
import * as toc from 'markdown-toc'
import { Repository } from 'typeorm';
import { Adventure } from './adventure.entity';

const md = MarkdownIt()

@Injectable()
export class AdventureService {
	constructor(
		@Inject('ADVENTURE_REPOSITORY')
		private adventureRepository:Repository<Adventure>
	){}

	async adventureList({page,size}){
		const list = await this.adventureRepository.find({
			skip:page - 1,
			take:size
		})
		return list
	}
	
	async writeMd(content){
		const ad = new Adventure()
		ad.content = content
		return await this.adventureRepository.save(ad)
	}
}
