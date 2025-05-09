import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import readFileTree, { DirObj } from 'src/utils/readFileTree';
import { readFile, writeFile } from 'node:fs/promises';
import * as MarkdownIt from 'markdown-it';
import * as path from 'path';
import * as toc from 'markdown-toc';
import { Repository,Between,In } from 'typeorm';
import { Adventure } from './adventure.entity';
import { Tag } from '../tags/tag.entity';
import { addDays } from 'date-fns'
import { Picture } from '../picture/picture.entity';
import { Comment } from '../comment/comment.entity';
const md = MarkdownIt();

@Injectable()
export class AdventureService {
  constructor(
    @Inject('ADVENTURE_REPOSITORY')
    private adventureRepository: Repository<Adventure>,

    @Inject('COMMENT_REPOSITORY')
    private commentRepository:Repository<Comment>
  ) {}

  async adventureList({ page, size }) {
    const list = await this.adventureRepository.find({
      skip: (page - 1) * size,
      take: size,
      order: {
        id: 'ASC',
      },
      where: {
        isPublish: true,
      },
    });

    for (let i = 0; i < list.length; i++) {
      list[i].commentCount  = await this.commentRepository.count({ where: { reply: list[i].id } });
    }

    list.forEach( (item: any) => {
      item.md = md.use(require('markdown-it-anchor')).render(item.content);
      const tocContent = md.render(toc(item.content).content);
      item.tocContent = tocContent;
    });
    return list;
  }

  async adminList({ page, size }) {
    const list = await this.adventureRepository.find({
      skip: (page - 1) * size,
      take: size,
      order: {
        id: 'ASC',
      },
    });
    return list;
  }

  async writeMd(query) {
    const ad = new Adventure();
    ad.content = query.content;
    ad.name = query.name;
    ad.tag = query.tag;
    ad.main_pic_id = query.mainPicId;
    return await this.adventureRepository.save(ad);
  }

  async deleteMd(query) {
    const targetMd = await this.adventureRepository.findOne({
      where: {
        id: query.id,
      },
    });
    targetMd.isDelete = true;
    return await this.adventureRepository.save(targetMd);
  }

  async updateMd(query) {
    const targetMd = await this.adventureRepository.findOne({
      where: {
        id: query.id,
      },
    });
    targetMd.content = query.content;
    targetMd.name = query.name;
    targetMd.tag = query.tag;
    targetMd.main_pic_id = query.mainPicId;
    return await this.adventureRepository.save(targetMd);
  }
  async zan(query) {
    const targetMd = await this.adventureRepository.findOne({
      where: {
        id: query.id,
      },
    });
    targetMd.up++;
    return await this.adventureRepository.save(targetMd);
  }
  async publish(query) {
    const targetMd = await this.adventureRepository.findOne({
      where: {
        id: query.id,
      },
    });
    targetMd.isPublish = true;
    return await this.adventureRepository.save(targetMd);
  }

  async unpublish(query) {
    const targetMd = await this.adventureRepository.findOne({
      where: {
        id: query.id,
      },
    });
    targetMd.isPublish = false;
    return await this.adventureRepository.save(targetMd);
  }

	async dayList(query){
		// 根据日期查询
		const { date } = query;
		const data = await this.adventureRepository.find({
			where:{
				create_at:Between(new Date(date),addDays(new Date(date),1))
			}
		})
		return data
	}
	async tagList(query){
		// 根据标签查询
		const {tag} = query
		const tags = tag.split(',')
		const data = await this.adventureRepository.find({
			where:{
				tag:In(tags)
			}
		})
		return data
	}

  async visitMd(query){
    // 根据id查询
    const {id} = query
    const data = await this.adventureRepository.findOne({
      where:{
        id:id
      }
    })
    if(!data){
      throw new HttpException('文章不存在',HttpStatus.BAD_REQUEST)
    }
    data.visit++
    await this.adventureRepository.save(data)
    return data
  }
}
