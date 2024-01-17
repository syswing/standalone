import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tag } from "./tag.entity";

@Injectable()
export class TagService{
	constructor(
		@Inject('TAG_REPOSITORY')
		private tagRepository:Repository<Tag>
	){}

	async addTag(body){
		const tag = new Tag()
		tag.ch = body.ch
		tag.en = body.en
		return await this.tagRepository.save(tag)
	}

	async list(){
		return await this.tagRepository.find()
	}

	async delTag(body){
		let targetTag = await this.tagRepository.findOne({
      where: {
        id:body.id,
      },
    })
		return await this.tagRepository.remove(targetTag)
	}

	async editTag(body){
		let targetTag = await this.tagRepository.findOne({
      where: {
        id:body.id,
      },
    })
		targetTag.ch = body.ch
		targetTag.en = body.en
		return await this.tagRepository.save(targetTag)
	}
}
