import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Comment } from './comment.entity'

@Injectable()
export class CommentService {
	constructor(
		@Inject('COMMENT_REPOSITORY')
		private commentRepository:Repository<Comment>
	){}

	async getCommentList({page,size}){
		const list = await this.commentRepository.find({
			where : {
        reply: 0
    	},
			skip:page - 1,
			take:size
		})
		return list
	}

	async saveComment(params){
		const comment = new Comment();
		comment.content = params.content
		comment.email = params.email
		comment.nickname = params.nickname
		return this.commentRepository.save(comment)
	}
}