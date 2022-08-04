import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import readFileTree, { DirObj } from 'src/utils/readFileTree';
import {readFile,writeFile} from 'node:fs/promises'
import * as MarkdownIt from 'markdown-it'
import * as path from 'path'

const md = MarkdownIt()

@Injectable()
export class AdventureService {
	private dirList : DirObj

	async adventureList(){
		const relativePath = 'adventure'
		const dirList = await readFileTree(relativePath) as DirObj
		this.dirList = dirList
		return dirList
	}

	async findAdventure(ino,mdName){
		if(!ino && !mdName){
			return {message:'必须上传 ino 或 mdName'}
		}
		if(!this.dirList) throw new HttpException('请先扫描', HttpStatus.INTERNAL_SERVER_ERROR);
		const findFile = (arrList) => {
			return arrList.map(item => {
				if(item.type === 'file' && (item.name === mdName + '.md' || item.ino == ino)){
					return item
				}else if(item.type === 'dir'){
					const children = item.childD.concat(item.childF)
					return findFile(children)
				}else{
					return null
				}
			})
		}
		const result = findFile([this.dirList]).flat(Infinity).filter(Boolean)
		return result
	}

	async readMd(filePath){
		try {  
			const controller = new AbortController();
			const { signal } = controller;
			const result = await readFile( path.resolve(filePath) , { 
				signal,
				encoding:'utf-8'
			});
			const dom = md.render(result)
			return dom
		} catch (err) {
			console.error(err);
		}
	}
	/**
	 * 
	 * @param content 文件内容
	 * @param postion 文件路径 在 /adventure 下
	 */
	async writeMd(content,postion){
		await writeFile(path.resolve(__filename,`../../../../adventure${postion}`),content)
	}
}
