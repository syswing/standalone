import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Comment } from './comment.entity'
import { Adventure } from "../adventure/adventure.entity";

@Injectable()
export class CommentService {
	constructor(
 		@Inject('ADVENTURE_REPOSITORY')
		private adventureRepository: Repository<Adventure>,

		@Inject('COMMENT_REPOSITORY')
		private commentRepository:Repository<Comment>
	){}

	async getCommentList({page,size,reply}){
		const list = await this.commentRepository.find({
			where : {
        reply: reply
    	},
			skip: (page - 1) * size,
			take:size
		})

		for (let i = 0; i < list.length; i++) {
			// 获取文章名称
			const adventure = await this.adventureRepository.findOne({
        where : {
          id: list[i].reply
        }
      })
      list[i].adventureName = adventure?.name || ''
      
    }

		return list
	}

	async saveComment(params){

		const comment = new Comment();
		comment.content = params.content
		comment.email = params.email
		comment.nickname = params.nickname
		comment.reply = params.reply
		return this.commentRepository.save(comment)
	}


	async delComment(body){
		let targetComment = await this.commentRepository.findOne({
      where: {
        id:body.id,
      },
    })
    return await this.commentRepository.remove(targetComment)
	}
	
}