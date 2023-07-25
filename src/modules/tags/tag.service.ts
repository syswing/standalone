import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tag } from "./tag.entity";

@Injectable()
export class TagService{
	constructor(
		@Inject('TAG_REPOSITORY')
		private tagRepository:Repository<Tag>
	){}

	async addTag(query){
		const tag = new Tag()
		tag.ch = query.ch
		tag.en = query.en
		return await this.tagRepository.save(tag)
	}

	async list(){
		return await this.tagRepository.find()
	}
}
