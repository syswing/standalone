import { DataSource } from 'typeorm';
import {Comment} from './comment.entity'

export const CommentProviders = [
	{
		provide:"COMMENT_REPOSITORY",
		useFactory:(datasource : DataSource) => datasource.getRepository(Comment),
		inject:['DATA_SOURCE']
	}
]
